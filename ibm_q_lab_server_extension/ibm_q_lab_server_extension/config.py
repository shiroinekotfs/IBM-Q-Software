import json
import requests
from jupyter_server.base.handlers import APIHandler
import tornado
import os
from pathlib import Path

class ConfigHandler(APIHandler):
    # The following decorator should be present on all verb methods (head, get, post,
    # patch, put, delete, options) to ensure only authorized user can request the
    # Jupyter server
    @tornado.web.authenticated
    def get(self):
        try:
            access_token = None
            access_token_name = None

            try:
                access_token_name = os.environ['ACCESS_TOKEN_COOKIE_NAME']

            except KeyError as error:
                if self.request.host.find('dev') != -1:
                    access_token_name = 'accessTokenStaging'
                else:
                    access_token_name = 'accessToken'
                self.log.error("Error: %s", error)
                self.log.warning("-> Env var 'accessTokenName' not defined. Taking 'accessToken' by default")

            if access_token_name in self.request.cookies:
                access_token = self.get_cookie(access_token_name)
                self.log.debug("-> Cookie [%s]: %s", access_token_name, access_token)

            # Try to get an access token using the qiskit configuration
            if access_token is None:
                with open(Path.home() / '.qiskit/qiskit-ibm.json') as qiskit_ibm_json:
                    qiskit_ibm_json_data = json.load(qiskit_ibm_json)
                    api_token = qiskit_ibm_json_data['default-ibm-quantum']['token']
                    auth_url = qiskit_ibm_json_data['default-ibm-quantum']['url']
                    r = requests.post(f'{auth_url}/users/loginWithToken', json={'apiToken': api_token})
                    if r.status_code == 200:
                        access_token = r.json()['id']


            disabledApps = os.environ.get('DISABLED_APPS', '')
            disabledApps = disabledApps.strip()

            self.finish(json.dumps({
                "accessToken": access_token,
                "env": (os.environ.get('JUPYTERLAB_ENV')),
                "serverHost": (os.environ.get('SERVER_HOST')),
                "apiAuthUrl": (os.environ.get('API_AUTH_URL')),
                "apiIbmQXUrl": (os.environ.get('API_IBMQX_URL')),
                "apiNetworkUrl": (os.environ.get('API_NETWORK_URL')),
                "apiRuntimeUrl": (os.environ.get('API_RUNTIME_URL')),
                "apiWsUrl": (os.environ.get('API_WS_URL')),
                "documentationUrl": (os.environ.get('DOCS_SERVER_URL')),
                "disabledApps": disabledApps.split(',') if disabledApps != '' else [],
                "segmentAppKey": (os.environ.get('SEGMENT_APP_KEY')),
                "segmentScript": (os.environ.get('SEGMENT_SCRIPT')),
                "segmentProductTitle": (os.environ.get('SEGMENT_PRODUCT_TITLE')),
                "medalliaScript": (os.environ.get('MEDALLIA_SCRIPT')),
                "medalliaTestData": (os.environ.get('MEDALLIA_TEST_DATA', False)),
                "medalliaAlwaysDisplaySurvey": (os.environ.get('MEDALLIA_ALWAYS_DISPLAY_SURVEY', False))
            }))

        except:
            self.set_status(500)
            self.finish(json.dumps({'error': 'Unexpected error'}))
