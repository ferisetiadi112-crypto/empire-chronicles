# Empire Chronicles 0 A.D. Simulation Layer

This directory is the engine-facing simulation layer.

## Current stage

The mod now contains a first native 0 A.D. simulation component for the
Empire Chronicles national population model.

The component keeps workers, soldiers and unemployed people inside one
national population pool. It does not create separate population pools.

The repository-level simulation model in /simulation remains the source
design for:

- simulation time
- country state
- population
- settlements
- world state
- simulation ticks

The next integration step is to connect settlement entities and territory
to the country component.

## Design rules

- Workers, soldiers and unemployed people are classifications of the same
  national population.
- Settlement territory is cell/tile based, not a permanent circle.
- Government offices act as settlement control centers.
- The player-facing game remains modern-day only.
