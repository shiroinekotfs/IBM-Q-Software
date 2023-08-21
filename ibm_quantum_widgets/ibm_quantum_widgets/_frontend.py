#!/usr/bin/env python
# coding: utf-8

# Copyright (c) IBM Research.
# Distributed under the terms of the Modified BSD License.

"""
Information about the frontend package of the widgets.
"""

from pathlib import Path
import json

HERE = Path(__file__).parent.resolve()

with (HERE / "labextension" / "package.json").open() as fid:
    pkg = json.load(fid)

module_name = "@quantum/lab-widgets"
module_version = pkg["version"]
