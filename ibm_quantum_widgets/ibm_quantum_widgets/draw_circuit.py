from .circuit_composer import CircuitComposer
from IPython.display import display

def draw_circuit(circuit):
  circuitComposer = CircuitComposer(circuit=circuit, editable=False)
  display(circuitComposer)

  return
