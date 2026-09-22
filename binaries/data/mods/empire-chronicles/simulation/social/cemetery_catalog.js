// Empire Chronicles cemetery levels.
//
// Cemeteries are large land-use areas rather than compact buildings.
// Grid dimensions represent reserved cemetery land, including paths and
// burial plots.

const EMPIRE_CHRONICLES_CEMETERIES = [
  { id: "community_cemetery", level: 1, technologyLevel: 1, minimumSettlementStage: "settlement", capacity: 50, gridWidth: 6, gridDepth: 6 },
  { id: "town_cemetery", level: 2, technologyLevel: 1, minimumSettlementStage: "town", capacity: 200, gridWidth: 8, gridDepth: 8 },
  { id: "city_cemetery", level: 3, technologyLevel: 2, minimumSettlementStage: "city", capacity: 1000, gridWidth: 10, gridDepth: 10 },
  { id: "regional_cemetery", level: 4, technologyLevel: 3, minimumSettlementStage: "province", capacity: 5000, gridWidth: 14, gridDepth: 14 },
  { id: "national_cemetery", level: 5, technologyLevel: 4, minimumSettlementStage: "capital", capacity: 20000, gridWidth: 20, gridDepth: 20 }
];

if (typeof globalThis !== "undefined")
	globalThis.EMPIRE_CHRONICLES_CEMETERIES =
		EMPIRE_CHRONICLES_CEMETERIES;
