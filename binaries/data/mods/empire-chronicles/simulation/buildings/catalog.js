// Empire Chronicles building catalog.
//
// Data-driven definitions for the first modern-day building families.
// This catalog describes progression requirements; visual assets and
// detailed production effects are added in later layers.

const EMPIRE_CHRONICLES_BUILDINGS = [
  { id: "government_office", category: "government", managementType: "player_build", technologyLevel: 1, minimumSettlementStage: "settlement", width: 3, depth: 4, maximumWidth: 3, maximumDepth: 4, prerequisiteBuildings: [] },
  { id: "small_house", category: "residential", managementType: "community_growth", technologyLevel: 1, minimumSettlementStage: "settlement", width: 1, depth: 1, maximumWidth: 3, maximumDepth: 3, prerequisiteBuildings: [] },
  { id: "basic_storage", category: "storage", managementType: "player_build", technologyLevel: 1, minimumSettlementStage: "settlement", width: 2, depth: 2, maximumWidth: 2, maximumDepth: 2, prerequisiteBuildings: [] },
  { id: "primary_school", category: "education", managementType: "player_build", technologyLevel: 1, minimumSettlementStage: "settlement", width: 3, depth: 3, maximumWidth: 4, maximumDepth: 4, prerequisiteBuildings: [] },
  { id: "health_center", category: "healthcare", managementType: "player_upgrade", technologyLevel: 2, minimumSettlementStage: "town", width: 3, depth: 3, maximumWidth: 5, maximumDepth: 5, prerequisiteBuildings: [] },
  { id: "workshop", category: "industry", managementType: "player_upgrade", technologyLevel: 2, minimumSettlementStage: "town", width: 3, depth: 3, maximumWidth: 5, maximumDepth: 5, prerequisiteBuildings: [] },
  { id: "market", category: "economy", managementType: "player_upgrade", technologyLevel: 2, minimumSettlementStage: "town", width: 3, depth: 3, maximumWidth: 5, maximumDepth: 5, prerequisiteBuildings: [] },
  { id: "hospital", category: "healthcare", managementType: "player_upgrade", technologyLevel: 3, minimumSettlementStage: "city", width: 4, depth: 4, maximumWidth: 6, maximumDepth: 6, prerequisiteBuildings: [] },
  { id: "factory", category: "industry", managementType: "player_upgrade", technologyLevel: 3, minimumSettlementStage: "city", width: 4, depth: 4, maximumWidth: 6, maximumDepth: 6, prerequisiteBuildings: [] },
  { id: "advanced_school", category: "education", managementType: "player_upgrade", technologyLevel: 3, minimumSettlementStage: "city", width: 4, depth: 4, maximumWidth: 6, maximumDepth: 6, prerequisiteBuildings: [] },
  { id: "university", category: "education", managementType: "player_upgrade", technologyLevel: 4, minimumSettlementStage: "province", width: 4, depth: 5, maximumWidth: 7, maximumDepth: 7, prerequisiteBuildings: [] },
  { id: "advanced_factory", category: "industry", managementType: "player_upgrade", technologyLevel: 4, minimumSettlementStage: "province", width: 5, depth: 5, maximumWidth: 7, maximumDepth: 7, prerequisiteBuildings: [] },
  { id: "national_hospital", category: "healthcare", managementType: "player_upgrade", technologyLevel: 4, minimumSettlementStage: "province", width: 5, depth: 5, maximumWidth: 7, maximumDepth: 7, prerequisiteBuildings: [] },
  { id: "research_center", category: "research", managementType: "player_upgrade", technologyLevel: 5, minimumSettlementStage: "capital", width: 5, depth: 5, maximumWidth: 8, maximumDepth: 8, prerequisiteBuildings: [] },
  { id: "advanced_industry", category: "industry", managementType: "player_upgrade", technologyLevel: 5, minimumSettlementStage: "capital", width: 6, depth: 6, maximumWidth: 9, maximumDepth: 9, prerequisiteBuildings: [] },
  { id: "national_command_center", category: "government", managementType: "player_upgrade", technologyLevel: 5, minimumSettlementStage: "capital", width: 6, depth: 6, maximumWidth: 9, maximumDepth: 9, prerequisiteBuildings: [] }
];

function getEmpireChroniclesBuilding(buildingId)
{
	for (const building of EMPIRE_CHRONICLES_BUILDINGS)
	{
		if (building.id === buildingId)
			return building;
	}

	return null;
}

function getEmpireChroniclesBuildingsForTechnology(level)
{
	return EMPIRE_CHRONICLES_BUILDINGS.filter(
		building => building.technologyLevel <= level
	);
}

if (typeof globalThis !== "undefined")
{
	globalThis.EMPIRE_CHRONICLES_BUILDINGS = EMPIRE_CHRONICLES_BUILDINGS;
	globalThis.getEmpireChroniclesBuilding = getEmpireChroniclesBuilding;
	globalThis.getEmpireChroniclesBuildingsForTechnology =
		getEmpireChroniclesBuildingsForTechnology;
}
