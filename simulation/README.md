# Empire Chronicles Simulation Layer

This directory contains the deterministic game-rule layer for Empire Chronicles.

## First playable milestone v0.1

The default simulation bootstrap now creates:

- one player country;
- one starting settlement;
- one shared population pool starting at 20 people;
- Technology Level I;
- an operational Government Office;
- settlement territory represented by cells;
- Food, Money and Building Materials resources;
- Pause / Normal / Fast / Very Fast simulation modes;
- a real Small House construction transaction that deducts resources and records the building;
- population growth actions that update the same national population pool and settlement stage.

Settlement progression remains population-driven:

- 20+: settlement
- 40+: town
- 70+: city
- 110+: province
- 160+: capital

City progression additionally requires Cemetery Level 3 in the progression component.

## Construction rule

constructSmallHouse(state, settlementId, cellId) is the first authoritative building action. It validates the settlement, territory, occupancy and resources before deducting the construction cost.

The current milestone deliberately separates simulation state from rendering. 0 A.D. native templates/components are the engine-facing layer; the repository-level simulation remains deterministic and testable.

## Existing native systems

The engine-facing mod contains native components for national population, settlements, government offices, territory, progression, buildings and social systems. Visual assets and full GUI integration are later milestones.
