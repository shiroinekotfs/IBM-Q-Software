#!/usr/bin/env python
# coding: utf-8

# Copyright (c) IBM Research.
# Distributed under the terms of the Modified BSD License.

"""
IBM Research Jupyter Notebook tools
"""

from ipywidgets import DOMWidget
from traitlets import Unicode, Instance, Integer, Bool
from ._frontend import module_name, module_version
from qiskit.circuit.quantumcircuit import QuantumCircuit
from.serializers import circuit_to_qasm, circuit_from_qasm
from .utils import DEFAULT_QREGS, DEFAULT_CREGS

class CircuitComposer(DOMWidget):
    """
    IBM Quantum experience circuit composer widget for Jupyter Notebooks
    """

    _model_name = Unicode('CircuitComposerModel').tag(sync=True)
    _model_module = Unicode(module_name).tag(sync=True)
    _model_module_version = Unicode(module_version).tag(sync=True)
    _view_name = Unicode('CircuitComposerView').tag(sync=True)
    _view_module = Unicode(module_name).tag(sync=True)
    _view_module_version = Unicode(module_version).tag(sync=True)

    circuit = Instance(QuantumCircuit, (DEFAULT_QREGS, DEFAULT_CREGS), allow_none=True).tag(sync=True, to_json=circuit_to_qasm, from_json=circuit_from_qasm)
    editable = Bool(True, allow_none=True).tag(sync=True)
    qiskit_code_cell_index = Integer(-1, read_only=True).tag(sync=True)