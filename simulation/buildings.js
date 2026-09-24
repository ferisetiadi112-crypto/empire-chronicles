// Empire Chronicles construction transactions.
// This layer owns state changes; GUI and rendering must call these actions.

const EC_BUILDING_COSTS = {
	small_house: { money: 50, buildingMaterials: 25 }
};

function getConstructionCost(buildingId)
{
	return EC_BUILDING_COSTS[buildingId] || null;
}

function constructBuilding(state, settlementId, buildingId, cellId)
{
	const settlement = state.world.settlements.find(
		candidate => candidate.id === settlementId
	);

	if (!settlement)
		throw new Error("Settlement not found: " + settlementId);

	if (!cellId)
		throw new Error("Building placement requires a cellId");

	if (settlement.territoryCells.length &&
		!settlement.territoryCells.includes(cellId))
		throw new Error("Building must be placed inside settlement territory");

	const cost = getConstructionCost(buildingId);
	if (!cost)
		throw new Error("Unknown building: " + buildingId);

	if (!canAfford(state.economy, cost))
		throw new Error("Insufficient resources for " + buildingId);

	if (settlement.buildings.some(building => building.cellId === cellId))
		throw new Error("Cell already occupied: " + cellId);

	spendResources(state.economy, cost);

	const building = {
		id: buildingId + "_" + (settlement.buildings.length + 1),
		type: buildingId,
		cellId,
		level: 1,
		status: "operational"
	};

	settlement.buildings.push(building);
	return building;
}

function constructSmallHouse(state, settlementId, cellId)
{
	return constructBuilding(state, settlementId, "small_house", cellId);
}

if (typeof globalThis !== "undefined")
{
	globalThis.EC_BUILDING_COSTS = EC_BUILDING_COSTS;
	globalThis.getConstructionCost = getConstructionCost;
	globalThis.constructBuilding = constructBuilding;
	globalThis.constructSmallHouse = constructSmallHouse;
}
