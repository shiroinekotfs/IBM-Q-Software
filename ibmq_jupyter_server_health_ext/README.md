
This project provides a `GET /jupyter_server_health` API extension to `jupyter-server`
which probes the file system. This can be used by a Kubernetes `livenessProbe`
to make sure the server is OK and if not restart the container.

Refer to [Server Extensions](https://jupyter-server.readthedocs.io/en/latest/developers/extensions.html)
on how jupyter-server extensions work.

Refer to the [CHANGELOG](CHANGELOG.md) for changes to the project.

# Running the extension

1. Install into a virtual environment, docker container, etc. Here we use a
   virtual environment:

    ```
    $ virtualenv .venv && source .venv/bin/activate && pip install -e .
    ```

2. Run the extension against a temporary file:

    ```
    $ HEALTH_TEST_PATH=/tmp/test.txt ibmq-jupyter-server-health-ext
    ```

3. If it works a browser should be automatically opened without any errors.
   If the health check worked a `204 No Content` response is returned. The
   console should look something like this:

    ```
    $ HEALTH_TEST_PATH=/tmp/test.txt ibmq-jupyter-server-health-ext
    [I 2021-09-28 17:26:18.518 ServerApp] jupyter_server_health | extension was successfully linked.
    [I 2021-09-28 17:26:18.539 ServerApp] jupyter_server_health | extension was successfully loaded.
    [I 2021-09-28 17:26:18.540 ServerApp] Serving notebooks from local directory: /home/osboxes/ibmq/ibmq-jupyter-server-health-ext
    [I 2021-09-28 17:26:18.540 ServerApp] Jupyter Server 1.11.0 is running at:
    [I 2021-09-28 17:26:18.540 ServerApp] http://localhost:8888/jupyter_server_health?token=2a79b3e06517ed9cbe1fa40bf439bc5860a1fc0640c46123
    [I 2021-09-28 17:26:18.540 ServerApp]  or http://127.0.0.1:8888/jupyter_server_health?token=2a79b3e06517ed9cbe1fa40bf439bc5860a1fc0640c46123
    [I 2021-09-28 17:26:18.540 ServerApp] Use Control-C to stop this server and shut down all kernels (twice to skip confirmation).
    [C 2021-09-28 17:26:18.877 ServerApp] 

    To access the server, open this file in a browser:
        file:///home/osboxes/.local/share/jupyter/runtime/jpserver-15440-open.html
    Or copy and paste one of these URLs:
        http://localhost:8888/jupyter_server_health?token=2a79b3e06517ed9cbe1fa40bf439bc5860a1fc0640c46123
     or http://127.0.0.1:8888/jupyter_server_health?token=2a79b3e06517ed9cbe1fa40bf439bc5860a1fc0640c46123
    ```

4. If there is an error you should see a traceback in the browser and an error
   in the console output, for example:

    ```
    $ ibmq-jupyter-server-health-ext
    [I 2021-09-28 17:28:47.243 ServerApp] jupyter_server_health | extension was successfully linked.
    [I 2021-09-28 17:28:47.263 ServerApp] jupyter_server_health | extension was successfully loaded.
    [I 2021-09-28 17:28:47.264 ServerApp] Serving notebooks from local directory: /home/osboxes/ibmq/ibmq-jupyter-server-health-ext
    [I 2021-09-28 17:28:47.264 ServerApp] Jupyter Server 1.11.0 is running at:
    [I 2021-09-28 17:28:47.264 ServerApp] http://localhost:8888/jupyter_server_health?token=deb9c8bd27cf1b09f06a257c7a92f605abafe911c33e363c
    [I 2021-09-28 17:28:47.264 ServerApp]  or http://127.0.0.1:8888/jupyter_server_health?token=deb9c8bd27cf1b09f06a257c7a92f605abafe911c33e363c
    [I 2021-09-28 17:28:47.264 ServerApp] Use Control-C to stop this server and shut down all kernels (twice to skip confirmation).
    [C 2021-09-28 17:28:47.606 ServerApp] 

    To access the server, open this file in a browser:
        file:///home/osboxes/.local/share/jupyter/runtime/jpserver-16156-open.html
    Or copy and paste one of these URLs:
        http://localhost:8888/jupyter_server_health?token=deb9c8bd27cf1b09f06a257c7a92f605abafe911c33e363c
     or http://127.0.0.1:8888/jupyter_server_health?token=deb9c8bd27cf1b09f06a257c7a92f605abafe911c33e363c
    [E 2021-09-28 17:28:49.478 HealthExtApp] Health check failed
        Traceback (most recent call last):
        File "/home/osboxes/ibmq/ibmq-jupyter-server-health-ext/jupyter_server_health/handlers.py", line 15, in get
            pathlib.Path(HEALTH_TEST_PATH).touch()
        File "/usr/lib/python3.8/pathlib.py", line 1278, in touch
            fd = self._raw_open(flags, mode)
        File "/usr/lib/python3.8/pathlib.py", line 1087, in _raw_open
            return self._accessor.open(self, flags, mode)
        FileNotFoundError: [Errno 2] No such file or directory: '/home/jovyan/.jupyter'
    [E 2021-09-28 17:28:49.480 HealthExtApp] {
        "Host": "localhost:8888",
        "User-Agent": "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:92.0) Gecko/20100101 Firefox/92.0",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.5",
        "Accept-Encoding": "gzip, deflate",
        "Connection": "keep-alive",
        "Cookie": "username-localhost-8888=\"2|1:0|10:1632864381|23:username-localhost-8888|44:Zjc1NjM2Y2E4ZmFmNDgwOTljNjAxYTI5OWYzZjY5ODk=|cb6ecb2bf2f4e085405c13c03a0f5c908cdf19b34695d291b9945cfd5890d6b6\"; _xsrf=2|ca3326ed|22ec76cc94b9a0d6d0c2ccc1fccb79e2|1632862923",
        "Upgrade-Insecure-Requests": "1",
        "Sec-Fetch-Dest": "document",
        "Sec-Fetch-Mode": "navigate",
        "Sec-Fetch-Site": "cross-site"
        }
    [E 2021-09-28 17:28:49.480 HealthExtApp] 500 GET /jupyter_server_health?token=deb9c8bd27cf1b09f06a257c7a92f605abafe911c33e363c (127.0.0.1) 3.34ms referer=None
    ```

# Releases

There is a Travis CI job that will build and publish the distribution package to the internal
[PyPI artifactory](https://na.artifactory.swg-devops.com/ui/repos/tree/General/res-quantum-team-pypi-local)
when a tag is created on this repository.

When creating a new release, the version should be updated in [setup.py](setup.py) and the
[CHANGELOG](CHANGELOG.md) should also be updated.
