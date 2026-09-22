// Empire Chronicles power generation catalog.
//
// Power plants convert available energy sources into electricity.
// Generation types are modern infrastructure, not historical eras.

const EMPIRE_CHRONICLES_POWER_PLANTS = [
  { id: "small_hydro", category: "hydro", fuel: "water", technologyLevel: 1, minimumSettlementStage: "settlement" },
  { id: "diesel_generator", category: "thermal", fuel: "diesel", technologyLevel: 1, minimumSettlementStage: "settlement" },

  { id: "coal_power_plant", category: "thermal", fuel: "coal", technologyLevel: 2, minimumSettlementStage: "town" },
  { id: "gas_power_plant", category: "thermal", fuel: "natural_gas", technologyLevel: 2, minimumSettlementStage: "town" },
  { id: "biomass_power_plant", category: "biomass", fuel: "biomass", technologyLevel: 2, minimumSettlementStage: "town" },

  { id: "solar_farm", category: "solar", fuel: "sunlight", technologyLevel: 2, minimumSettlementStage: "town" },
  { id: "wind_farm", category: "wind", fuel: "wind", technologyLevel: 2, minimumSettlementStage: "town" },
  { id: "geothermal_plant", category: "geothermal", fuel: "geothermal", technologyLevel: 3, minimumSettlementStage: "city" },

  { id: "large_hydro", category: "hydro", fuel: "water", technologyLevel: 3, minimumSettlementStage: "city" },
  { id: "combined_cycle_gas", category: "thermal", fuel: "natural_gas", technologyLevel: 3, minimumSettlementStage: "city" },

  { id: "nuclear_power_plant", category: "nuclear", fuel: "uranium", technologyLevel: 4, minimumSettlementStage: "province" },
  { id: "advanced_nuclear_plant", category: "nuclear", fuel: "uranium", technologyLevel: 5, minimumSettlementStage: "capital" }
];

function getEmpireChroniclesPowerPlant(plantId)
{
	for (const plant of EMPIRE_CHRONICLES_POWER_PLANTS)
	{
		if (plant.id === plantId)
			return plant;
	}

	return null;
}

if (typeof globalThis !== "undefined")
	globalThis.EMPIRE_CHRONICLES_POWER_PLANTS =
		EMPIRE_CHRONICLES_POWER_PLANTS;
