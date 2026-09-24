// Simulation tick coordinator.
//
// Rendering and GUI must not own simulation state.
// The coordinator advances the deterministic simulation clock first, then
// runs simulation systems. Building growth is intentionally supplied as a
// system so the core tick remains independent from rendering.

function runSimulationTick(state, gameHours = 1, systems) {
  if (state.time.paused) return state;

  advanceSimulationClock(state.time, gameHours);

  for (const settlement of state.world.settlements) {
    const country = state.world.countries.find(candidate => candidate.id === settlement.countryId);\n    settlement.stage = getSettlementStage(\n      settlement.population,\n      country ? country.technologyLevel : 1,\n      settlement.cemeteryLevel || 0\n    );
  }

  if (systems && typeof systems.run === "function")
    systems.run(state);

  return state;
}

function runBuildingGrowthTick(state, buildings, growthSystem) {
  if (!state || !buildings || !growthSystem)
    return [];

  if (typeof growthSystem.run !== "function")
    return [];

  return growthSystem.run(state, buildings);
}

if (typeof globalThis !== "undefined") {
  globalThis.runSimulationTick = runSimulationTick;
  globalThis.runBuildingGrowthTick = runBuildingGrowthTick;
}
