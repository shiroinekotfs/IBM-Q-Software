from .application import HealthExtApp


def _jupyter_server_extension_points():
    """This makes the extension discoverable by jupyter-server"""
    return [
        {
            'module': 'jupyter_server_health.application',
            'app': HealthExtApp
        }
    ]
