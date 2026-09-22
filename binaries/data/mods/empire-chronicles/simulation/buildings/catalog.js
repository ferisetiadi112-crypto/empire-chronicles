// Empire Chronicles building catalog.
//
// Data-driven definitions for the first modern-day building families.
// This catalog describes progression requirements; visual assets and
// detailed production effects are added in later layers.

const EMPIRE_CHRONICLES_BUILDINGS = [
  { id: "government_office", category: "government", technologyLevel: 1, minimumSettlementStage: "settlement", width: 3, depth: 4, prerequisiteBuildings: [] },
  { id: "small_house", category: "residential", technologyLevel: 1, minimumSettlementStage: "settlement", width: 2, depth: 2, prerequisiteBuildings: [] },
  { id: "basic_storage", category: "storage", technologyLevel: 1, minimumSettlementStage: "settlement", width: 2, depth: 2, prerequisiteBuildings: [] },
  { id: "primary_school", category: "education", technologyLevel: 1, minimumSettlementStage: "settlement", width: 3, depth: 3, prerequisiteBuildings: [] },

  { id: "health_center", category: "healthcare", technologyLevel: 2, minimumSettlementStage: "town", width: 3, depth: 3, prerequisiteBuildings: ["primary_school"] },
  { id: "workshop", category: "industry", technologyLevel: 2, minimumSettlementStage: "town", width: 3, depth: 3, prerequisiteBuildings: ["basic_storage"] },
  { id: "market", category: "economy", technologyLevel: 2, minimumSettlementStage: "town", width: 3, depth: 3, prerequisiteBuildings: ["basic_storage"] },

  { id: "hospital", category: "healthcare", technologyLevel: 3, minimumSettlementStage: "city", width: 4, depth: 4, prerequisiteBuildings: ["health_center"] },
  { id: "factory", category: "industry", technologyLevel: 3, minimumSettlementStage: "city", width: 4, depth: 4, prerequisiteBuildings: ["workshop", "basic_storage"] },
  { id: "advanced_school", category: "education", technologyLevel: 3, minimumSettlementStage: "city", width: 4, depth: 4, prerequisiteBuildings: ["primary_school"] },

  { id: "university", category: "education", technologyLevel: 4, minimumSettlementStage: "province", width: 4, depth: 5, prerequisiteBuildings: ["advanced_school"] },
  { id: "advanced_factory", category: "industry", technologyLevel: 4, minimumSettlementStage: "province", width: 5, depth: 5, prerequisiteBuildings: ["factory"] },
  { id: "national_hospital", category: "healthcare", technologyLevel: 4, minimumSettlementStage: "province", width: 5, depth: 5, prerequisiteBuildings: ["hospital"] },

  { id: "research_center", category: "research", technologyLevel: 5, minimumSettlementStage: "capital", width: 5, depth: 5, prerequisiteBuildings: ["university"] },
  { id: "advanced_industry", category: "industry", technologyLevel: 5, minimumSettlementStage: "capital", width: 6, depth: 6, prerequisiteBuildings: ["advanced_factory"] },
  { id: "national_command_center", category: "government", technologyLevel: 5, minimumSettlementStage: "capital", width: 6, depth: 6, prerequisiteBuildings: ["government_office"] }
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
