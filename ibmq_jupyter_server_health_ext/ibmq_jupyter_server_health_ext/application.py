try:
    from jupyter_server.extension.application import ExtensionApp
except:
    from os import system
    system('pip install jupyter_server requests')
    from jupyter_server.extension.application import ExtensionApp

from .handlers import HealthExtensionHandler


class HealthExtApp(ExtensionApp):

    # The name of the extension.
    name = 'jupyter_server_health'

    # The url that your extension will serve its homepage.
    extension_url = name

    # Should your extension expose other server extensions when launched
    # directly?
    load_other_extensions = True

    def initialize_handlers(self):
        self.handlers.extend(
            [
                (f'/{self.name}', HealthExtensionHandler),
            ]
        )


# -----------------------------------------------------------------------------
# Main entry point
# -----------------------------------------------------------------------------

main = launch_new_instance = HealthExtApp.launch_instance
