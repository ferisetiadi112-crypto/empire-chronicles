// Empire Chronicles agriculture and livestock catalog.
//
// Food production is part of the national economy and population system.
// These are modern-day production categories, not historical-era mechanics.

const EMPIRE_CHRONICLES_AGRICULTURE = [
  { id: "corn_farm", category: "crop", product: "corn", technologyLevel: 1, minimumSettlementStage: "settlement" },
  { id: "wheat_farm", category: "crop", product: "wheat", technologyLevel: 1, minimumSettlementStage: "settlement" },
  { id: "peanut_farm", category: "crop", product: "peanut", technologyLevel: 1, minimumSettlementStage: "settlement" },

  { id: "chicken_farm", category: "livestock", product: "chicken", technologyLevel: 1, minimumSettlementStage: "settlement" },
  { id: "cattle_farm", category: "livestock", product: "cattle", technologyLevel: 1, minimumSettlementStage: "settlement" },

  { id: "coffee_plantation", category: "plantation", product: "coffee", technologyLevel: 2, minimumSettlementStage: "town" },
  { id: "tea_plantation", category: "plantation", product: "tea", technologyLevel: 2, minimumSettlementStage: "town" },
  { id: "cocoa_plantation", category: "plantation", product: "cocoa", technologyLevel: 2, minimumSettlementStage: "town" }
];

function getEmpireChroniclesAgriculture(productionId)
{
	for (const production of EMPIRE_CHRONICLES_AGRICULTURE)
	{
		if (production.id === productionId)
			return production;
	}

	return null;
}

function getEmpireChroniclesAgricultureForTechnology(level)
{
	return EMPIRE_CHRONICLES_AGRICULTURE.filter(
		production => production.technologyLevel <= level
	);
}

if (typeof globalThis !== "undefined")
{
	globalThis.EMPIRE_CHRONICLES_AGRICULTURE =
		EMPIRE_CHRONICLES_AGRICULTURE;
	globalThis.getEmpireChroniclesAgriculture =
		getEmpireChroniclesAgriculture;
	globalThis.getEmpireChroniclesAgricultureForTechnology =
		getEmpireChroniclesAgricultureForTechnology;
}
