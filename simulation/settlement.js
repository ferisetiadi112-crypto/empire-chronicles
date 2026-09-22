// Settlement model.
// Settlement territory is represented as a collection of world cells.
// It is not a permanent circular boundary.

const SETTLEMENT_STAGES = [
  { id: "settlement", minPopulation: 20 },
  { id: "town", minPopulation: 40 },
  { id: "city", minPopulation: 70 },
  { id: "province", minPopulation: 110 },
  { id: "capital", minPopulation: 160 }
];

function getSettlementStage(population) {
  let stage = SETTLEMENT_STAGES[0];

  for (const candidate of SETTLEMENT_STAGES) {
    if (population >= candidate.minPopulation) stage = candidate;
  }

  return stage.id;
}

function createSettlement({ id, name, countryId, population = 20 } = {}) {
  if (!id || !name || !countryId) {
    throw new Error("Settlement requires id, name and countryId");
  }

  return {
    id,
    name,
    countryId,
    population,
    stage: getSettlementStage(population),
    governmentOfficeId: null,
    territoryCells: [],
    buildings: [],
    infrastructure: []
  };
}

if (typeof globalThis !== "undefined") {
  globalThis.getSettlementStage = getSettlementStage;
  globalThis.createSettlement = createSettlement;
}
