// World-state operations.

function addCountry(state, country) {
  if (state.world.countries.some(existing => existing.id === country.id)) {
    throw new Error("Country already exists: " + country.id);
  }

  if (state.world.countries.length >= 1000) {
    throw new Error("World country limit reached");
  }

  state.world.countries.push(country);
  return country;
}

function addSettlement(state, settlement) {
  if (state.world.settlements.some(existing => existing.id === settlement.id)) {
    throw new Error("Settlement already exists: " + settlement.id);
  }

  state.world.settlements.push(settlement);

  const country = state.world.countries.find(
    candidate => candidate.id === settlement.countryId
  );

  if (!country) {
    throw new Error("Settlement country not found: " + settlement.countryId);
  }

  country.settlements.push(settlement.id);
  return settlement;
}

if (typeof globalThis !== "undefined") {
  globalThis.addCountry = addCountry;
  globalThis.addSettlement = addSettlement;
}
