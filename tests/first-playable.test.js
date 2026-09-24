const fs = require("fs");
const path = require("path");
const vm = require("vm");
const assert = require("assert");

const ROOT = path.resolve(__dirname, "..");
const LOAD_ORDER = [
  "simulation/constants.js",
  "simulation/time.js",
  "simulation/population.js",
  "simulation/country.js",
  "simulation/settlement.js",
  "simulation/world.js",
  "simulation/state.js",
  "simulation/tick.js",
  "simulation/bootstrap.js",
  "simulation/economy.js",
  "simulation/buildings.js",
  "simulation/first-playable.js",
  "simulation/index.js"
];

const context = { console };
vm.createContext(context);

for (const relativePath of LOAD_ORDER)
{
  const source = fs.readFileSync(path.join(ROOT, relativePath), "utf8");
  vm.runInContext("(function() {\n" + source + "\n}).call(globalThis);", context, {
    filename: relativePath
  });
}

const simulation = context.createEmpireChroniclesSimulation();
const state = simulation.state;
const country = state.world.countries[0];
const settlement = state.world.settlements[0];

assert.strictEqual(country.population.total, 20);
assert.strictEqual(settlement.population, 20);
assert.strictEqual(country.technologyLevel, 1);
assert.strictEqual(settlement.stage, "settlement");
assert.strictEqual(state.economy.food, 1000);
assert.strictEqual(state.economy.money, 500);
assert.strictEqual(state.economy.buildingMaterials, 300);
assert.strictEqual(settlement.infrastructure[0].type, "government_office");

simulation.buildSmallHouse("center");
assert.strictEqual(settlement.buildings.length, 1);
assert.strictEqual(settlement.buildings[0].type, "small_house");
assert.strictEqual(state.economy.money, 450);
assert.strictEqual(state.economy.buildingMaterials, 275);

simulation.addPopulation(20);
assert.strictEqual(country.population.total, 40);
assert.strictEqual(settlement.population, 40);
assert.strictEqual(settlement.stage, "town");

// City requires both 70 population and Cemetery Level 3.
simulation.addPopulation(30);
assert.strictEqual(country.population.total, 70);
assert.strictEqual(settlement.stage, "town");
settlement.cemeteryLevel = 3;
simulation.tick(1);
assert.strictEqual(settlement.stage, "city");

simulation.setSpeed("paused");
assert.strictEqual(state.time.paused, true);
simulation.setSpeed("very_fast");
assert.strictEqual(state.time.paused, false);
assert.strictEqual(state.time.speed, 4);

console.log("Empire Chronicles first-playable self-test: PASS");
