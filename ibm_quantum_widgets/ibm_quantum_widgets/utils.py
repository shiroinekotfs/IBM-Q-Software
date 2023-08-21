#!/usr/bin/env python
# coding: utf-8

# Copyright (c) IBM Research.
# Distributed under the terms of the Modified BSD License.

DEFAULT_QREGS = 3
DEFAULT_CREGS = 3
DEFAULT_QASM = 'OPENQASM 2.0;include "qelib1.inc";qreg q[{}];creg c[{}];'.format(DEFAULT_QREGS, DEFAULT_CREGS)
