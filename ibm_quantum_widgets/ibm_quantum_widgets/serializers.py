#!/usr/bin/env python
# coding: utf-8

# Copyright (c) IBM Research.
# Distributed under the terms of the Modified BSD License.

"""
IBM Research Jupyter Notebook circuit serializers
"""
from qiskit.circuit.quantumcircuit import QuantumCircuit
import json
from .utils import DEFAULT_QASM

def circuit_to_qasm(circuit, widget):
    if circuit is None:
        return json.dumps(DEFAULT_QASM)
    else:
        return json.dumps(circuit.qasm())

def circuit_from_qasm(qasm, widget):
    return QuantumCircuit.from_qasm_str(json.loads(qasm))
