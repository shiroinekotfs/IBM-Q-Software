from .circuit_composer import CircuitComposer
from IPython.display import display

def edit_circuit(circuit = None):
  circuitComposer = CircuitComposer(circuit=circuit)
  display(circuitComposer)

  return circuitComposer
