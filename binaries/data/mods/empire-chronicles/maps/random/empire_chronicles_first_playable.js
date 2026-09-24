Engine.LoadLibrary("rmgen");
Engine.LoadLibrary("rmgen-common");

function* generateMap()
{
	globalThis.g_Map = new RandomMap(0, "grass1_spring");

	const playerCount = getNumPlayers();
	const playerPlacement = playerPlacementCircle(fractionToTiles(0.35));

	placePlayerBases({
		"PlayerPlacement": playerPlacement,
		"CityPatch": {
			"outerTerrain": "grass1_spring",
			"innerTerrain": "grass1_spring"
		},
		"StartingAnimal": {},
		"Trees": {
			"template": "gaia/tree/oak",
			"count": 5
		}
	});

	for (let i = 0; i < playerCount; ++i)
	{
		const playerId = i + 1;
		const pos = playerPlacement[1][i];
		const governmentOfficePos = Vector2D.add(pos, new Vector2D(10, 0));
		const smallHousePos = Vector2D.add(pos, new Vector2D(-10, 0));

		g_Map.placeEntityAnywhere(
			"structures/empire_chronicles/government_office",
			playerId,
			governmentOfficePos,
			0);

		g_Map.placeEntityAnywhere(
			"structures/empire_chronicles/small_house",
			playerId,
			smallHousePos,
			0);
	}

	placePlayersNomad(g_Map.createTileClass());

	return g_Map;
}
