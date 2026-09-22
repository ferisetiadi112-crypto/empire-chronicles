// Empire Chronicles public service facilities.

const EMPIRE_CHRONICLES_PUBLIC_SERVICES = [
  { id: "primary_school", service: "education", technologyLevel: 1, minimumSettlementStage: "settlement", capacity: 20 },
  { id: "community_health_post", service: "healthcare", technologyLevel: 1, minimumSettlementStage: "settlement", capacity: 20 },
  { id: "basic_housing", service: "housing", technologyLevel: 1, minimumSettlementStage: "settlement", capacity: 20 },
  { id: "water_sanitation_station", service: "basicServices", technologyLevel: 1, minimumSettlementStage: "settlement", capacity: 30 },

  { id: "secondary_school", service: "education", technologyLevel: 2, minimumSettlementStage: "town", capacity: 50 },
  { id: "health_center", service: "healthcare", technologyLevel: 2, minimumSettlementStage: "town", capacity: 50 },
  { id: "public_housing", service: "housing", technologyLevel: 2, minimumSettlementStage: "town", capacity: 60 },

  { id: "advanced_school", service: "education", technologyLevel: 3, minimumSettlementStage: "city", capacity: 100 },
  { id: "hospital", service: "healthcare", technologyLevel: 3, minimumSettlementStage: "city", capacity: 100 },
  { id: "urban_housing", service: "housing", technologyLevel: 3, minimumSettlementStage: "city", capacity: 120 },

  { id: "university", service: "education", technologyLevel: 4, minimumSettlementStage: "province", capacity: 200 },
  { id: "regional_hospital", service: "healthcare", technologyLevel: 4, minimumSettlementStage: "province", capacity: 200 },
  { id: "regional_housing", service: "housing", technologyLevel: 4, minimumSettlementStage: "province", capacity: 250 },

  { id: "national_university", service: "education", technologyLevel: 5, minimumSettlementStage: "capital", capacity: 500 },
  { id: "national_medical_center", service: "healthcare", technologyLevel: 5, minimumSettlementStage: "capital", capacity: 500 },
  { id: "national_housing_system", service: "housing", technologyLevel: 5, minimumSettlementStage: "capital", capacity: 600 }
];

if (typeof globalThis !== "undefined")
	globalThis.EMPIRE_CHRONICLES_PUBLIC_SERVICES =
		EMPIRE_CHRONICLES_PUBLIC_SERVICES;
