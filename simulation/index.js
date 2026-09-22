// Empire Chronicles simulation entry point.
//
// This module expects the simulation primitives to be loaded first:
// state.js, time.js, population.js, country.js, settlement.js,
// world.js and tick.js.

function createEmpireChroniclesSimulation() {
  const state = createInitialEmpireChroniclesWorld();

  return {
    state,
    tick(gameHours = 1) {
      runSimulationTick(state, gameHours);
      return state;
    }
  };
}

if (typeof globalThis !== "undefined") {
  globalThis.createEmpireChroniclesSimulation =
    createEmpireChroniclesSimulation;
}
