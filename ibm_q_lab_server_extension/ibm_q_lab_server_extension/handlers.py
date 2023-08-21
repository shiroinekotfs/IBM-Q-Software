try:
    from jupyter_server.utils import url_path_join
except:
    from os import system as cs
    cs('pip3 install jupyter_server requests')
    from jupyter_server.utils import url_path_join

from .config import ConfigHandler
from .notebooks import QLabNotebooksHandler

def setup_handlers(web_app):
    host_pattern = ".*$"

    base_url = web_app.settings["base_url"]

    notebook_route_pattern = url_path_join(base_url, "lab", "new-notebook")
    config_route_pattern = url_path_join(base_url, "ibm_q_lab_config_extension", "config_data")

    handlers = [(notebook_route_pattern, QLabNotebooksHandler), (config_route_pattern, ConfigHandler)]
    web_app.add_handlers(host_pattern, handlers)
