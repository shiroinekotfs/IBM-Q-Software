import json
from jupyter_server.base.handlers import JupyterHandler
from jupyter_server.utils import url_path_join, url_escape
import tornado
from tornado import web
from tornado.httpclient import AsyncHTTPClient, HTTPClientError, HTTPRequest
import os
from urllib.parse import urlparse
import datetime

NOTEBOOK_PYTHON_VERSION = '3.7.8'


class QLabNotebooksHandler(JupyterHandler):
    def create_cell(self, cell_code):
        cell = {
            "cell_type": 'code',
            "execution_count": 0,
            "metadata": {
                "trusted": True
            },
            "outputs": [],
            "source": cell_code
        }
        return cell

    def create_notebook(self, qiskit_code):
        cells_code = None
        if isinstance(qiskit_code, str):
            cells_code = [qiskit_code]
        elif isinstance(qiskit_code, list):
            cells_code = qiskit_code
        else:
            raise Exception('qiskit_code must a string or a list of strings')

        cells = list(map(self.create_cell, cells_code))

        notebook = {
            "cells": cells,
            "metadata": {
                "kernelspec": {
                    "display_name": "Python 3",
                    "language": "python",
                    "name": "python3"
                },
                "language_info": {
                    "codemirror_mode": {
                        "name": "ipython",
                        "version": 3
                    },
                    "file_extension": ".py",
                    "mimetype": "text/x-python",
                    "name": "python",
                    "nbconvert_exporter": "python",
                    "pygments_lexer": "ipython3",
                    "version": NOTEBOOK_PYTHON_VERSION
                }
            },
            "nbformat": 4,
            "nbformat_minor": 4
        }
        return notebook

    def get_notebook_descriptor(self, qiskit_code):
        code = self.create_notebook(qiskit_code)
        notebook_descriptor = {
            "content": code,
            "format": "json",
            "mimetype": "None",
            "type": "notebook"
        }
        return notebook_descriptor

    @tornado.web.authenticated
    async def get(self):
        http_client = AsyncHTTPClient()

        notebook_name = self.get_query_argument('filename')
        encoded_notebook_name = url_escape(notebook_name)
        qiskit_code = self.get_query_argument('code', default=None)
        notebook_url = self.get_query_argument('notebook_url', default=None)

        if notebook_url is not None:
            parsed_url = urlparse(notebook_url)
            domain = parsed_url.netloc

            if not (domain == "quantum-computing.ibm.com" or domain.endswith(".quantum-computing.ibm.com")):
                raise web.HTTPError(400, 'Invalid notebook_url')

            put_response = await http_client.fetch(notebook_url)
            notebook_descriptor = {
                "content": json.loads(put_response.body),
                "format": "json",
                "mimetype": "None",
                "type": "notebook"
            }

        elif qiskit_code is not None:
            notebook_descriptor = self.get_notebook_descriptor(qiskit_code)
        else:
            raise web.HTTPError(400, 'code or notebook_url parameters are required')

        # In case JLab is running under JHub, take token from env var, else from the req.
        token = os.environ['JUPYTERHUB_API_TOKEN'] if 'JUPYTERHUB_API_TOKEN' in os.environ else self.token
        base_url = f"{self.request.protocol}://{url_path_join(self.request.host, self.settings['base_url'])}"
        get_response = await http_client.fetch(url_path_join(base_url, f"api/contents/{url_escape(notebook_name)}?token={token}"),
                                               raise_error=False)
        if get_response.code == 200:
            # File already exists, adding the date to the file to avoid data loss
            date_str = datetime.datetime.now().strftime("%Y-%m-%d_%H-%M-%S")
            notebook_name_split = os.path.splitext(notebook_name)
            notebook_name = notebook_name_split[0] + "_" + date_str + notebook_name_split[1]

        put_response = await http_client.fetch(HTTPRequest(
            url=url_path_join(base_url, f"/api/contents/{url_escape(notebook_name)}?token={token}"),
            headers={
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body=json.dumps(notebook_descriptor),
            method='PUT'
        ), raise_error=False)

        if 200 <= put_response.code < 300:
            url = url_path_join(base_url, f'/lab/tree/{url_escape(notebook_name)}?reset')
            self.redirect(url)
        else:
            self.log.error('Error creating notebook', put_response.request.url, 'code:', put_response.code, ', not in range 200..300')
            raise web.HTTPError(put_response.code, f'Error creating notebook "{notebook_name}".')
