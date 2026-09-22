// Modern country entity.

function createCountry({ id, name, population = 20 } = {}) {
  if (!id || !name) {
    throw new Error("Country requires id and name");
  }

  return {
    id,
    name,
    technologyLevel: 1,
    population: createPopulation(population),
    treasury: 0,
    settlements: [],
    infrastructure: [],
    government: {
      stability: 100
    },
    diplomacy: {}
  };
}

if (typeof globalThis !== "undefined") {
  globalThis.createCountry = createCountry;
}
