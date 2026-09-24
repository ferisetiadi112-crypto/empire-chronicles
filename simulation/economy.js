// Empire Chronicles economy foundation for the first playable milestone.
// Resources are explicit state, not UI-only counters.

const EC_RESOURCE_TYPES = ["food", "money", "buildingMaterials"];

function createEconomy({ food = 1000, money = 500, buildingMaterials = 300 } = {})
{
	return { food, money, buildingMaterials };
}

function validateEconomy(economy)
{
	return EC_RESOURCE_TYPES.every(resource =>
		Number.isFinite(economy[resource]) && economy[resource] >= 0);
}

function canAfford(economy, cost)
{
	return EC_RESOURCE_TYPES.every(resource =>
		(economy[resource] || 0) >= (cost[resource] || 0));
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
	globalThis.createEconomy = createEconomy;
	globalThis.validateEconomy = validateEconomy;
	globalThis.canAfford = canAfford;
	globalThis.spendResources = spendResources;
}
