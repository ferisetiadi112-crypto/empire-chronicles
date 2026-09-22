// Discrete simulation clock for Empire Chronicles.

const EC_TIME = {
  SECONDS_PER_GAME_DAY: 600,
  HOURS_PER_GAME_DAY: 24,
  DAYS_PER_GAME_MONTH: 30,
  MONTHS_PER_GAME_YEAR: 12
};

function createSimulationClock() {
  return {
    year: 1,
    month: 1,
    day: 1,
    hour: 0,
    speed: 1,
    paused: false
  };
}

function advanceSimulationClock(clock, gameHours = 1) {
  if (clock.paused) return clock;

  let totalHours = clock.hour + gameHours;

  while (totalHours >= EC_TIME.HOURS_PER_GAME_DAY) {
    totalHours -= EC_TIME.HOURS_PER_GAME_DAY;
    clock.day += 1;

    if (clock.day > EC_TIME.DAYS_PER_GAME_MONTH) {
      clock.day = 1;
      clock.month += 1;

      if (clock.month > EC_TIME.MONTHS_PER_GAME_YEAR) {
        clock.month = 1;
        clock.year += 1;
      }
    }
  }

  clock.hour = totalHours;
  return clock;
}

if (typeof globalThis !== "undefined") {
  globalThis.createSimulationClock = createSimulationClock;
  globalThis.advanceSimulationClock = advanceSimulationClock;
}
