# Empire Chronicles 0 A.D. Simulation Layer

This directory is the engine-facing simulation layer.

## Current stage

The mod now contains native components for:

- national population
- settlements
- government offices
- cell-based settlement territory
- adjacent territory expansion

The repository-level simulation model in /simulation remains the source design for:

- simulation time
- country state
- population
- settlements
- world state
- simulation ticks

## Territory rules

- Settlement territory is a collection of discrete world cells.
- Territory is not a permanent circle or radius.
- New territory cells must be adjacent to existing territory.
- Government Office is the settlement control center.
- Government Office does not itself define the settlement boundary.
- Buildings will later require valid settlement territory for placement.

## Settlement rules

Settlement stages are population-driven:

- 20+: settlement
- 40+: town
- 70+: city
- 110+: province
- 160+: capital

The player-facing game remains modern-day only.

## Population rules

Workers, soldiers and unemployed people are classifications of the same national population pool. They are not additional population pools.
