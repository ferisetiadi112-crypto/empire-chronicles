// Empire Chronicles simulation constants.
// Keep simulation rules independent from rendering and GUI.

const EC_SIMULATION = {
  VERSION: "0.1.0",

  TIME: {
    SECONDS_PER_GAME_DAY: 600,
    DAYS_PER_GAME_WEEK: 7,
    DAYS_PER_GAME_MONTH: 30,
    MONTHS_PER_GAME_YEAR: 12
  },

  TECHNOLOGY: {
    LEVELS: 5
  },

  POPULATION: {
    NEW_COUNTRY: 20,
    GLOBAL_CAP: 100000000,
    COUNTRY_CAP: 10000000
  }
};

if (typeof globalThis !== "undefined") {
  globalThis.EC_SIMULATION = EC_SIMULATION;
}
