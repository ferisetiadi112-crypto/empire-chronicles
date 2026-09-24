// Empire Chronicles simulation entry point.
// The first playable world is now the default simulation bootstrap.

function createEmpireChroniclesSimulation()
{
	const state = createFirstPlayableWorld();

	return {
		state,
		tick(gameHours = 1)
		{
			runSimulationTick(state, gameHours);
			return state;
		},
		buildSmallHouse(cellId)
		{
			return constructSmallHouse(state, state.world.settlements[0].id, cellId);
		},
		addPopulation(amount = 1)
		{
			return addPopulation(state, state.world.settlements[0].id, amount);
		},
		setSpeed(mode)
		{
			return setSimulationSpeed(state, mode);
		}
	};
}

if (typeof globalThis !== "undefined")
{
	globalThis.createEmpireChroniclesSimulation =
		createEmpireChroniclesSimulation;
}
