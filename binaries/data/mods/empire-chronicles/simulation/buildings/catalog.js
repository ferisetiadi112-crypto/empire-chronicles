// Empire Chronicles building catalog.
//
// Data-driven definitions for the first modern-day building families.
// This catalog describes progression requirements; visual assets and
// detailed production effects are added in later layers.

const EMPIRE_CHRONICLES_BUILDINGS = [
  { id: "government_office", category: "government", technologyLevel: 1, width: 3, depth: 4 },
  { id: "small_house", category: "residential", technologyLevel: 1, width: 2, depth: 2 },
  { id: "basic_storage", category: "storage", technologyLevel: 1, width: 2, depth: 2 },
  { id: "primary_school", category: "education", technologyLevel: 1, width: 3, depth: 3 },

  { id: "health_center", category: "healthcare", technologyLevel: 2, width: 3, depth: 3 },
  { id: "workshop", category: "industry", technologyLevel: 2, width: 3, depth: 3 },
  { id: "market", category: "economy", technologyLevel: 2, width: 3, depth: 3 },

  { id: "hospital", category: "healthcare", technologyLevel: 3, width: 4, depth: 4 },
  { id: "factory", category: "industry", technologyLevel: 3, width: 4, depth: 4 },
  { id: "advanced_school", category: "education", technologyLevel: 3, width: 4, depth: 4 },

  { id: "university", category: "education", technologyLevel: 4, width: 4, depth: 5 },
  { id: "advanced_factory", category: "industry", technologyLevel: 4, width: 5, depth: 5 },
  { id: "national_hospital", category: "healthcare", technologyLevel: 4, width: 5, depth: 5 },

  { id: "research_center", category: "research", technologyLevel: 5, width: 5, depth: 5 },
  { id: "advanced_industry", category: "industry", technologyLevel: 5, width: 6, depth: 6 },
  { id: "national_command_center", category: "government", technologyLevel: 5, width: 6, depth: 6 }
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
