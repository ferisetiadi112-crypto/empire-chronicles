// Empire Chronicles v0.1 first-playable milestone.
// One country, one settlement, 20 shared population, Technology I,
// Government Office, basic resources and a real Small House transaction.

function createFirstPlayableWorld()
{
	const state = createInitialEmpireChroniclesWorld();

	state.economy = createEconomy();
	state.player.speedMode = "normal";

	const country = state.world.countries[0];
	country.resources = state.economy;
	country.treasury = state.economy.money;
	country.technologyLevel = 1;

	const settlement = state.world.settlements[0];
	settlement.territoryCells = ["center", "north", "south", "east", "west"];
	settlement.infrastructure.push({
		id: "government_office_001",
		type: "government_office",
		status: "operational"
	});
	settlement.governmentOfficeId = "government_office_001";
	settlement.stage = getSettlementStage(settlement.population);

	state.firstPlayable = {
		version: "0.1.0",
		startingPopulation: 20,
		technologyLevel: 1,
		startingSettlementStage: "settlement",
		nextSettlementStage: "town",
		townPopulation: 40
	};

	return state;
}

function addPopulation(state, settlementId, amount)
{
	if (!Number.isInteger(amount) || amount <= 0)
		throw new Error("Population increase must be a positive integer");

	const settlement = state.world.settlements.find(
		candidate => candidate.id === settlementId
	);
	if (!settlement)
		throw new Error("Settlement not found: " + settlementId);

	const country = state.world.countries.find(
		candidate => candidate.id === settlement.countryId
	);
	if (!country)
		throw new Error("Country not found: " + settlement.countryId);

	const nextPopulation = country.population.total + amount;
	if (nextPopulation > EC_SIMULATION.POPULATION.COUNTRY_CAP)
		throw new Error("Country population cap reached");

	country.population.total = nextPopulation;
	country.population.employment.unemployed += amount;
	settlement.population += amount;
	settlement.stage = getSettlementStage(settlement.population);

	return settlement.population;
}

function setSimulationSpeed(state, mode)
{
	const speeds = { paused: 0, normal: 1, fast: 2, very_fast: 4 };
	if (!(mode in speeds))
		throw new Error("Unknown simulation speed: " + mode);

	state.player.speedMode = mode;
	state.time.paused = mode === "paused";
	state.time.speed = speeds[mode];
	return state.time;
}

if (typeof globalThis !== "undefined")
{
	globalThis.createFirstPlayableWorld = createFirstPlayableWorld;
	globalThis.addPopulation = addPopulation;
	globalThis.setSimulationSpeed = setSimulationSpeed;
}
