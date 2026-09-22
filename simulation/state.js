// Minimal serializable world state for Empire Chronicles.
// This is intentionally independent from GUI rendering.

function createEmpireChroniclesState() {
  return {
    version: "0.1.0",

    time: {
      year: 1,
      month: 1,
      day: 1,
      hour: 0,
      paused: false,
      speed: 1
    },

    world: {
      countries: [],
      settlements: [],
      infrastructure: [],
      events: []
    },

    player: {
      countryId: null
    }
  };
}

if (typeof globalThis !== "undefined") {
  globalThis.createEmpireChroniclesState = createEmpireChroniclesState;
}
