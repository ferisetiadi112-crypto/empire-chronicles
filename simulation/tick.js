// Simulation tick coordinator.
// Rendering and GUI must not own simulation state.

function runSimulationTick(state, gameHours = 1) {
  if (state.time.paused) return state;

  advanceSimulationClock(state.time, gameHours);

  for (const settlement of state.world.settlements) {
    settlement.stage = getSettlementStage(settlement.population);
  }

  return state;
}

if (typeof globalThis !== "undefined") {
  globalThis.runSimulationTick = runSimulationTick;
}
