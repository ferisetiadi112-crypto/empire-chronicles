// Empire Chronicles engine bridge.
// Runtime rules remain in the repository-level simulation layer and native
// simulation components. This bridge exposes the first playable contract.

var EmpireChronicles = {
  VERSION: "0.1.0",

  TIME: {
    SECONDS_PER_GAME_DAY: 600,
    HOURS_PER_GAME_DAY: 24,
    DAYS_PER_GAME_MONTH: 30,
    MONTHS_PER_GAME_YEAR: 12
  },

  TECHNOLOGY_LEVELS: 5,

  POPULATION: {
    NEW_COUNTRY: 20,
    COUNTRY_CAP: 10000000,
    GLOBAL_CAP: 100000000
  },

  SETTLEMENT_STAGES: [
    { id: "settlement", minPopulation: 20 },
    { id: "town", minPopulation: 40 },
    { id: "city", minPopulation: 70 },
    { id: "province", minPopulation: 110 },
    { id: "capital", minPopulation: 160 }
  ],

  FIRST_PLAYABLE: {
    technologyLevel: 1,
    population: 20,
    settlementStage: "settlement",
    townPopulation: 40,
    resources: {
      food: 1000,
      money: 500,
      buildingMaterials: 300
    },
    startingBuildings: ["government_office"],
    constructibleBuildings: ["small_house"]
  }
};
