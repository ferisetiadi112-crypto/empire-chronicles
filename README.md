# Empire Chronicles

**Empire Chronicles** is a modern-day grand strategy, city-building, nation simulation, and real-time strategy game built on the **0 A.D. engine**.

> This README is the authoritative project orientation document. Any AI or developer joining the repository should read this file first and preserve the design principles below.

## 1. Game Identity

Empire Chronicles is not a historical-age game. The player-facing game is set in the modern era and uses five technology levels as progression levels.

The game combines city and settlement development, national population simulation, economy and production, agriculture, livestock and plantations, mining, natural resources, energy generation, education, healthcare, housing, public services, spirituality, culture, social cohesion, government, territory, diplomacy, international relations, trade, maritime activity, military and national security, and world-scale geopolitics.

Core identity: **City Builder + Nation Simulator + Grand Strategy + RTS.**

Complexity belongs in the simulation engine; the player interface should remain understandable.

## 2. Volume 1 Scope

- Windows standalone
- offline single-player
- local saves
- local AI
- modern-day setting only
- five technology levels
- Home Country Map
- World Map
- Atlas used internally by developers for the master world
- no player-facing map editor
- no server, cloud database, login or multiplayer requirement

Atlas is a developer tool for authoring the master world. The player does not receive a map editor in Volume 1.

## 3. Two Map Layers

### Home Country Map
Detailed simulation of the player's country and settlements: buildings, population, roads and infrastructure, agriculture, industry, services, energy, local economy and military production.

### World Map
Higher-level national simulation: countries, borders and territory, diplomacy, trade, foreign investment, international relations, conflict and geopolitical changes.

## 4. Population Is One Shared National Pool

Fundamental rule: workers, soldiers, unemployed people, children, youth, adults and elderly are classifications of the same population. They are never additional population pools.

- new country starts with 20 residents
- country maximum: 10,000,000
- global maximum: 100,000,000

The population model is intended to evolve through age progression, births, deaths, migration, workforce changes, wellbeing and economic conditions.

## 5. Settlement Development

Settlement progression:

1. Settlement — 20+
2. Town — 40+
3. City — 70+
4. Province — 110+
5. Capital — 160+

Technology is also required for progression.

A settlement is controlled by its Government Office, but the office does not create a permanent circular boundary. Territory is cell/grid based, can be irregular, and expands through adjacent cells. Buildings must be placed inside valid settlement territory.

### Important City Requirement

To progress to City, the settlement must have a Level 3 Cemetery, in addition to population and technology requirements.

## 6. Building Philosophy

Every building must have a deliberately defined spatial and progression model.

Five management types are defined:

- **A — Land Only:** player provides/reserves land; no conventional player construction. Examples may include agriculture areas, livestock areas, plantations and some cemetery/land-use areas.
- **B — Player Build:** player selects the location and constructs the building. Examples: government office, schools, hospitals, factories, markets, ports and power plants.
- **C — Community Growth:** player provides the initial building/land, then residents upgrade it automatically according to social and economic development. Example: House Level 1 → 2 → 3 → 4 → 5.
- **D — Player Upgrade:** player deliberately upgrades the building. Used for strategic buildings where investment and planning should be a player decision.
- **E — Fixed:** building has no upgrade path.

## 7. Reserved Development Grid

A building's current footprint can be smaller than its maximum future footprint. The full maximum development area must be reserved when the building is first placed.

Example residential house:

| Level | Active footprint |
|---|---:|
| 1 | 1 grid (1×1) |
| 2 | 4 grids (2×2) |
| 3 | 4 grids (2×2, different shape) |
| 4 | 9 grids (3×3) |
| 5 | 9 grids (3×3, different shape) |

Therefore, a Level 1 house already reserves 9 grids for future development. Residents can upgrade it without demolishing or relocating the original building.

This principle should eventually apply to every building family where appropriate. Gameplay footprint is not the same thing as image/texture size.

## 8. Cemetery Design

Cemeteries are large land-use areas, not ordinary compact buildings.

| Level | Capacity | Reserved grid |
|---|---:|---:|
| 1 | 50 | 6×6 |
| 2 | 200 | 8×8 |
| 3 | 1,000 | 10×10 |
| 4 | 5,000 | 14×14 |
| 5 | 20,000 | 20×20 |

The cemetery system is connected primarily to public health, environmental/civic conditions and wellbeing. It should not automatically privilege or rank religions.

The intent is that a settlement does not need many cemeteries. Instead, it develops an appropriately sized and maintained cemetery as the settlement grows.

## 9. Public Services and Wellbeing

Current public-service model contains education, healthcare, housing and basic services.

Wellbeing currently uses seven indicators:

1. education
2. healthcare
3. housing
4. basic services
5. spirituality
6. social cohesion
7. economic security

Overall wellbeing is an outcome indicator, not a population pool.

## 10. Spirituality and Culture

Spirituality is modeled as a social dimension, not as a system for deciding which religion is correct.

Current concepts include spiritual participation, worship/community facilities, cultural activities, social cohesion, cultural identity and heritage.

The game should avoid making spirituality automatically equal to higher stability. Effects should emerge from simulated social conditions.

## 11. Demography

Population lifecycle recognizes children, youth, adults and elderly.

The demographic layer has been started with birth rate, death rate, migration balance and net growth rate.

Next integration: connect these to the country simulation tick so births, deaths, migration and ageing become actual population changes.

## 12. Economy, Production and Resources

### Agriculture
Current concepts: corn, wheat, peanuts, chicken, cattle, coffee, tea, cocoa and oil palm. Agriculture, livestock and plantations are treated as large production areas rather than ordinary compact building footprints.

### Mining
Construction: stone, sand, limestone, clay. Metals: iron, copper, bauxite, nickel, tin, zinc, manganese, cobalt. Precious: gold, silver. Energy resources: coal, oil, natural gas.

Mining is deposit-based: extraction should occur from actual world resource deposits.

### Energy
Current catalog concepts: small hydro, diesel generator, coal, gas, biomass, solar, wind, geothermal, large hydro, combined-cycle gas, nuclear and advanced nuclear.

The full electricity grid, storage and consumption simulation is not yet implemented.

### Maritime
Current implemented concept: Level 1 Fishing Port. Future levels are planned for coastal trade, commercial ports, major/international ports and advanced global maritime networks.

## 13. Territory and Placement Rules

Settlement territory is a collection of discrete cells.

Established rules:
- territory is not a permanent circle
- new territory expands through adjacent cells
- Government Office is the settlement control center
- Government Office does not itself define the entire settlement boundary
- buildings require valid settlement territory
- building footprints cannot overlap occupied cells
- building access cells must remain available

Large land-use systems such as agriculture and cemeteries are exceptions to ordinary compact building footprints.

## 14. Time Model

- 1 game day = 10 real minutes
- 1 game hour ≈ 25 real seconds
- 1 game week = 70 real minutes
- 1 game month = 5 real hours
- 1 game year ≈ 60 real hours ≈ 2.5 real days

Speed controls: Normal, Fast, Very Fast, Pause.

Simulation calculations should use discrete ticks rather than calculating every economic/social rule every rendered frame.

## 15. Technology

There are five technology levels. They are progression levels, not historical eras. The player-facing setting remains modern-day throughout all five levels.

Technology affects access to buildings, infrastructure, industry, services, energy and advanced systems.

## 16. Current Repository Architecture

empire-chronicles/
├── README.md
├── mod.json
├── docs/
├── simulation/
├── gui/
├── maps/
├── art/
└── binaries/
    └── data/
        └── mods/
            └── empire-chronicles/
                ├── mod.json
                ├── globalscripts/
                └── simulation/
                    ├── components/
                    ├── templates/
                    ├── buildings/
                    ├── agriculture/
                    ├── maritime/
                    ├── mining/
                    ├── energy/
                    └── social/

The repository-level /simulation directory remains the design/model layer. The binaries/data/mods/empire-chronicles/ directory is the engine-facing 0 A.D. mod layer.

## 17. Current Development Status

### Foundation completed

- repository initialized from a clean start
- 0 A.D. mod manifest and engine bridge
- simulation constants/state/bootstrap
- country population component
- settlement component
- government office component
- cell-based territory and adjacent territory expansion
- building placement rules
- building definitions
- technology system
- settlement progression
- building requirements
- building catalog
- agriculture and large-land agriculture model
- industrial crops/oil palm
- fishing port catalog
- mining resource catalog and resource deposits
- energy catalog
- spirituality/culture layer
- public services layer
- wellbeing layer
- population lifecycle layer
- demographic model
- cemetery infrastructure and progression
- reserved building development footprint
- initial five-level residential growth model

### Most recent implementation

The latest building-growth rule is: a building reserves its maximum planned footprint at initial placement and can later grow within that reserved area.

Current residential prototype: Level 1 1×1 → Level 2 2×2 → Level 3 2×2 different shape → Level 4 3×3 → Level 5 3×3 different shape.

### Important current limitation

The first random-map prototype is engine-tested and now loads successfully in 0 A.D. Release 28. The Government Office also has an engine-facing progression and settlement-state bridge, including the City Cemetery Level 3 gate.

These systems are still foundational. Complete integration into the 0 A.D. simulation loop, GUI, Atlas-authored maps, visual assets, production calculations, actual population transitions and full gameplay interactions has not yet been completed or engine-tested.

Do not claim that a system is fully playable merely because its component/catalog has been committed.

## 18. Immediate Development Direction

Next major work should focus on integrating existing systems rather than adding disconnected catalogs.

Priority:

1. connect building growth and management types to building definitions
2. connect reserved footprints to placement/occupation rules
3. connect population lifecycle to actual country population changes
4. connect wellbeing to demographic and economic outcomes
5. connect workforce to economic sectors
6. connect production/resource deposits to actual settlement economy
7. connect energy production to consumption
8. connect services to settlement development
9. connect progression requirements to actual settlement state
10. create a minimal playable 0 A.D. test scenario

Guiding principle: **Build the simulation foundation first, then connect it into the playable game. Do not create disconnected features merely for appearance.**

## 19. AI / Developer Instructions

Any AI or developer continuing this project should:

- read this README before changing architecture
- preserve the modern-day setting
- preserve the five technology levels
- preserve the single shared population-pool rule
- preserve cell-based territory
- preserve reserved development land for upgradeable buildings
- distinguish player-built, community-growth, player-upgrade, land-only and fixed structures
- avoid creating unnecessary parallel systems
- update this README when a major architectural rule changes
- never claim engine functionality has been tested unless an actual 0 A.D. runtime test was performed
- prefer small, coherent commits
- keep engine-facing implementation under binaries/data/mods/empire-chronicles/
- keep reusable design/model logic under the repository-level simulation/ layer