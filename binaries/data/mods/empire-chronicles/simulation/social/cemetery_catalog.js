// Empire Chronicles cemetery levels.

const EMPIRE_CHRONICLES_CEMETERIES = [
  { id: "community_cemetery", level: 1, technologyLevel: 1, minimumSettlementStage: "settlement", capacity: 50 },
  { id: "town_cemetery", level: 2, technologyLevel: 1, minimumSettlementStage: "town", capacity: 200 },
  { id: "city_cemetery", level: 3, technologyLevel: 2, minimumSettlementStage: "city", capacity: 1000 },
  { id: "regional_cemetery", level: 4, technologyLevel: 3, minimumSettlementStage: "province", capacity: 5000 },
  { id: "national_cemetery", level: 5, technologyLevel: 4, minimumSettlementStage: "capital", capacity: 20000 }
];

if (typeof globalThis !== "undefined")
	globalThis.EMPIRE_CHRONICLES_CEMETERIES =
		EMPIRE_CHRONICLES_CEMETERIES;
