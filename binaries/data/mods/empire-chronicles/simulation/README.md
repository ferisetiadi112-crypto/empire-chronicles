# Empire Chronicles 0 A.D. Simulation Layer

This directory is the engine-facing simulation layer.

## Current stage

The mod currently establishes the 0 A.D. mod structure and exposes the
Empire Chronicles configuration through globalscripts/EmpireChronicles.js.

The repository-level simulation model in /simulation remains the source
design for:

- simulation time
- country state
- population
- settlements
- world state
- simulation ticks

The next integration step is to move these rules into native 0 A.D.
simulation components and system/template definitions.

## Design rules

- Workers, soldiers and unemployed people are classifications of the same
  national population.
- Settlement territory is cell/tile based, not a permanent circle.
- Government offices act as settlement control centers.
- The player-facing game remains modern-day only.
