import os
import pathlib
import traceback

from jupyter_server.base.handlers import JupyterHandler
from jupyter_server.extension.handler import ExtensionHandlerMixin

HEALTH_TEST_PATH = os.getenv('HEALTH_TEST_PATH', '/home/jovyan/.jupyter')


class HealthExtensionHandler(ExtensionHandlerMixin, JupyterHandler):
    def get(self):
        try:
            pathlib.Path(HEALTH_TEST_PATH).touch()
            self.set_status(204)
            self.finish()
        except Exception:
            self.log.exception('Health check failed')
            self.set_status(500)
            self.finish(traceback.format_exc())
