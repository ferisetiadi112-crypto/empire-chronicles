// Empire Chronicles social and cultural facilities.

const EMPIRE_CHRONICLES_SOCIAL_FACILITIES = [
  { id: "community_worship_center", category: "spirituality", technologyLevel: 1, minimumSettlementStage: "settlement", width: 3, depth: 3 },
  { id: "community_center", category: "community", technologyLevel: 1, minimumSettlementStage: "settlement", width: 3, depth: 3 },

  { id: "religious_center", category: "spirituality", technologyLevel: 2, minimumSettlementStage: "town", width: 4, depth: 4 },
  { id: "cultural_center", category: "culture", technologyLevel: 2, minimumSettlementStage: "town", width: 4, depth: 4 },

  { id: "major_religious_complex", category: "spirituality", technologyLevel: 3, minimumSettlementStage: "city", width: 5, depth: 5 },
  { id: "cultural_institution", category: "culture", technologyLevel: 3, minimumSettlementStage: "city", width: 5, depth: 5 },

  { id: "national_religious_institution", category: "spirituality", technologyLevel: 4, minimumSettlementStage: "province", width: 5, depth: 6 },
  { id: "national_cultural_institution", category: "culture", technologyLevel: 4, minimumSettlementStage: "province", width: 5, depth: 6 },

  { id: "national_heritage_cultural_center", category: "culture", technologyLevel: 5, minimumSettlementStage: "capital", width: 6, depth: 6 }
];

if (typeof globalThis !== "undefined")
	globalThis.EMPIRE_CHRONICLES_SOCIAL_FACILITIES =
		EMPIRE_CHRONICLES_SOCIAL_FACILITIES;
