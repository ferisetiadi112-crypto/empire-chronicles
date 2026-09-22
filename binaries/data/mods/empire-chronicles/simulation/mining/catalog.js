// Empire Chronicles mining resource catalog.
//
// Deposits represent naturally occurring resources on the world map.
// Extraction facilities are placed over valid deposits and do not create
// resources from nothing.

const EMPIRE_CHRONICLES_MINING_RESOURCES = [
  { id: "stone", category: "construction", extraction: "quarry" },
  { id: "sand", category: "construction", extraction: "quarry" },
  { id: "limestone", category: "construction", extraction: "quarry" },
  { id: "clay", category: "construction", extraction: "quarry" },

  { id: "iron", category: "metal", extraction: "mine" },
  { id: "copper", category: "metal", extraction: "mine" },
  { id: "bauxite", category: "metal", extraction: "mine" },
  { id: "nickel", category: "metal", extraction: "mine" },
  { id: "tin", category: "metal", extraction: "mine" },
  { id: "zinc", category: "metal", extraction: "mine" },
  { id: "manganese", category: "metal", extraction: "mine" },
  { id: "cobalt", category: "metal", extraction: "mine" },

  { id: "gold", category: "precious_metal", extraction: "mine" },
  { id: "silver", category: "precious_metal", extraction: "mine" },

  { id: "coal", category: "energy", extraction: "mine" },
  { id: "oil", category: "energy", extraction: "well" },
  { id: "natural_gas", category: "energy", extraction: "well" }
];

function getEmpireChroniclesMiningResource(resourceId)
{
	for (const resource of EMPIRE_CHRONICLES_MINING_RESOURCES)
	{
		if (resource.id === resourceId)
			return resource;
	}

	return null;
}

if (typeof globalThis !== "undefined")
{
	globalThis.EMPIRE_CHRONICLES_MINING_RESOURCES =
		EMPIRE_CHRONICLES_MINING_RESOURCES;
	globalThis.getEmpireChroniclesMiningResource =
		getEmpireChroniclesMiningResource;
}
