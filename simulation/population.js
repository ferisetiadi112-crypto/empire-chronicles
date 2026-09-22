// Population model.
// Workers, soldiers and unemployed people are classifications of the
// same national population, never additional population pools.

const EC_POPULATION = {
  NEW_COUNTRY: 20,
  GLOBAL_CAP: 100000000,
  COUNTRY_CAP: 10000000,
  AGE_GROUPS: ["children", "youth", "adult", "elderly"]
};

function createPopulation(size = EC_POPULATION.NEW_COUNTRY) {
  return {
    total: size,
    ageGroups: {
      children: 0,
      youth: 0,
      adult: size,
      elderly: 0
    },
    employment: {
      workers: size,
      soldiers: 0,
      unemployed: 0
    }
  };
}

function validatePopulation(population) {
  const employmentTotal =
    population.employment.workers +
    population.employment.soldiers +
    population.employment.unemployed;

  return employmentTotal === population.total &&
    population.total >= 0 &&
    population.total <= EC_POPULATION.COUNTRY_CAP;
}

if (typeof globalThis !== "undefined") {
  globalThis.createPopulation = createPopulation;
  globalThis.validatePopulation = validatePopulation;
}
