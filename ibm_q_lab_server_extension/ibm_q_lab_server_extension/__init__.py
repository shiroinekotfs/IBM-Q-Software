from ._version import __version__

import json
from .handlers import setup_handlers
import os

dirname = os.path.dirname(__file__)
filename = os.path.join(dirname, 'labextension/package.json')

with open(filename) as f:
    pkg = json.load(f)

def _jupyter_labextension_paths():
    return [{
        "src": "labextension",
        "dest": pkg["name"]
    }]

def _jupyter_server_extension_points():
    return [{
        "module": "ibm_q_lab_server_extension"
    }]

def _load_jupyter_server_extension(server_app):
    """Registers the API handler to receive HTTP requests from the frontend extension.

    Parameters
    ----------
    server_app: jupyterlab.labapp.LabApp
        JupyterLab application instance
    """
    setup_handlers(server_app.web_app)
    server_app.log.info("Registered extension at URL path /new-notebook")

# For backward compatibility with notebook server - useful for Binder/JupyterHub
load_jupyter_server_extension = _load_jupyter_server_extension

