// Empire Chronicles economy and utility foundation.
//
// Physical goods are stock resources. Electricity, water and other networks
// are modeled as utilities with capacity, production and consumption so they
// can later connect to buildings and infrastructure.

const EC_RESOURCE_TYPES = [
	"food",
	"money",
	"buildingMaterials",
	"fuel",
	"medicine"
];

const EC_UTILITY_TYPES = [
	"electricity",
	"water",
	"sanitation",
	"communications"
];

function createEconomy({
	food = 1000,
	money = 500,
	buildingMaterials = 300,
	fuel = 100,
	medicine = 50,
	electricity = {},
	water = {},
	sanitation = {},
	communications = {}
} = {})
{
	return {
		food,
		money,
		buildingMaterials,
		fuel,
		medicine,
		utilities: {
			electricity: createUtility(electricity),
			water: createUtility(water),
			sanitation: createUtility(sanitation),
			communications: createUtility(communications)
		}
	};
}

function createUtility({
	capacity = 0,
	production = 0,
	consumption = 0,
	reserve = 0
} = {})
{
	return {
		capacity: Math.max(0, capacity),
		production: Math.max(0, production),
		consumption: Math.max(0, consumption),
		reserve: Math.max(0, reserve)
	};
}

function getUtilityBalance(economy, utilityType)
{
	if (!EC_UTILITY_TYPES.includes(utilityType))
		throw new Error("Unknown utility: " + utilityType);

	const utility = economy.utilities[utilityType];
	return utility.production - utility.consumption;
}

function validateEconomy(economy)
{
	const resourcesValid = EC_RESOURCE_TYPES.every(resource =>
		Number.isFinite(economy[resource]) && economy[resource] >= 0
	);

	const utilitiesValid = EC_UTILITY_TYPES.every(utilityType =>
		economy.utilities &&
		economy.utilities[utilityType] &&
		Object.values(economy.utilities[utilityType]).every(
			value => Number.isFinite(value) && value >= 0
		)
	);

	return resourcesValid && utilitiesValid;
}

function canAfford(economy, cost)
{
	return EC_RESOURCE_TYPES.every(resource =>
		(economy[resource] || 0) >= (cost[resource] || 0)
	);
}

function spendResources(economy, cost)
{
	if (!canAfford(economy, cost))
		throw new Error("Insufficient resources");

	for (const resource of EC_RESOURCE_TYPES)
		economy[resource] -= cost[resource] || 0;

	return economy;
}

if (typeof globalThis !== "undefined")
{
	globalThis.EC_RESOURCE_TYPES = EC_RESOURCE_TYPES;
	globalThis.EC_UTILITY_TYPES = EC_UTILITY_TYPES;
	globalThis.createEconomy = createEconomy;
	globalThis.createUtility = createUtility;
	globalThis.getUtilityBalance = getUtilityBalance;
	globalThis.validateEconomy = validateEconomy;
	globalThis.canAfford = canAfford;
	globalThis.spendResources = spendResources;
}
