// Empire Chronicles maritime production.
//
// Level 1 coastal port access is intentionally limited to fishing.
// Trade, shipping and larger maritime infrastructure are added at
// higher technology levels.

const EMPIRE_CHRONICLES_PORTS = [
  {
    id: "fishing_port",
    category: "fishing",
    technologyLevel: 1,
    minimumSettlementStage: "settlement",
    requiredCoast: true
  }
];

function getEmpireChroniclesPort(portId)
{
	for (const port of EMPIRE_CHRONICLES_PORTS)
	{
		if (port.id === portId)
			return port;
	}

	return null;
}

if (typeof globalThis !== "undefined")
{
	globalThis.EMPIRE_CHRONICLES_PORTS = EMPIRE_CHRONICLES_PORTS;
	globalThis.getEmpireChroniclesPort = getEmpireChroniclesPort;
}
