// Example simulation bootstrap.
// This file defines the first playable world state without depending on GUI.

function createInitialEmpireChroniclesWorld() {
  const state = createEmpireChroniclesState();

  const country = createCountry({
    id: "country_001",
    name: "New Country",
    population: 20
  });

  const settlement = createSettlement({
    id: "settlement_001",
    name: "Capital Settlement",
    countryId: country.id,
    population: 20
  });

  addCountry(state, country);
  addSettlement(state, settlement);

  state.player.countryId = country.id;

  return state;
}

if (typeof globalThis !== "undefined") {
  globalThis.createInitialEmpireChroniclesWorld =
    createInitialEmpireChroniclesWorld;
}
