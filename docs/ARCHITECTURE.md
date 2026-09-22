# Empire Chronicles Architecture

## Runtime

0 A.D. / Pyrogenesis is the runtime foundation.

## Mod layers

1. Data and templates
2. JavaScript simulation and gameplay
3. GUI
4. Atlas-authored master maps
5. C++ engine changes only when the mod layer cannot provide the required capability

## World model

### Home Country Map

Detailed settlements, buildings, infrastructure, population and production.

### World Map

Countries, diplomacy, trade, foreign investment, geopolitics and conflicts.

## Design principle

Complexity belongs in the simulation; player interaction should remain understandable and game-like.

Atlas is a developer-only tool. Players will not receive a map editor.
