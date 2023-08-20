import json
import os

__all__ = ["__version__"]

dirname = os.path.dirname(__file__)
filename = os.path.join(dirname, 'labextension/package.json')

with open(filename) as f:
    pkg = json.load(f)

__version__ = pkg['version']
