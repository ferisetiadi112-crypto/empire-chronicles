// Empire Chronicles land-based production.
//
// Agriculture and livestock use dedicated land areas rather than ordinary
// building footprints. The production area can be large and irregular.

const EMPIRE_CHRONICLES_LAND_PRODUCTION = {
  corn_farm: { landType: "farmland", minimumArea: 12, technologyLevel: 1 },
  wheat_farm: { landType: "farmland", minimumArea: 12, technologyLevel: 1 },
  peanut_farm: { landType: "farmland", minimumArea: 10, technologyLevel: 1 },

  chicken_farm: { landType: "pasture", minimumArea: 10, technologyLevel: 1 },
  cattle_farm: { landType: "pasture", minimumArea: 20, technologyLevel: 1 },

  coffee_plantation: { landType: "plantation", minimumArea: 20, technologyLevel: 2 },
  tea_plantation: { landType: "plantation", minimumArea: 20, technologyLevel: 2 },
  cocoa_plantation: { landType: "plantation", minimumArea: 20, technologyLevel: 2 }
};

function getEmpireChroniclesLandRequirement(productionId)
{
	return EMPIRE_CHRONICLES_LAND_PRODUCTION[productionId] || null;
}
