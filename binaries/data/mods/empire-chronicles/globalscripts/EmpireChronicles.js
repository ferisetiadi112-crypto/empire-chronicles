// Empire Chronicles engine bridge.
// This file is intentionally small: the detailed simulation rules remain
// in the repository's simulation/ layer until they are connected to
// 0 A.D. simulation components.

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
    { "id": "settlement", "minPopulation": 20 },
    { "id": "town", "minPopulation": 40 },
    { "id": "city", "minPopulation": 70 },
    { "id": "province", "minPopulation": 110 },
    { "id": "capital", "minPopulation": 160 }
  ]
};
