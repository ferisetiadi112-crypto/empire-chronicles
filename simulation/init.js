// Simulation bootstrap.
// Later this will be wired into the 0 A.D. simulation component lifecycle.

function initializeEmpireChroniclesSimulation() {
  const state = createEmpireChroniclesState();

  return {
    state,
    initialized: true
  };
}

if (typeof globalThis !== "undefined") {
  globalThis.initializeEmpireChroniclesSimulation =
    initializeEmpireChroniclesSimulation;
}
