// Empire Chronicles territory manager.
//
// Territory grows by adding adjacent world cells. The manager deliberately
// uses discrete cell adjacency instead of a radius or circular boundary.

function EmpireChroniclesTerritoryManager() {}

EmpireChroniclesTerritoryManager.prototype.Schema =
	"<element name='SettlementId'>" +
		"<text/>" +
	"</element>";

EmpireChroniclesTerritoryManager.prototype.Init = function()
{
	this.settlementId = this.template.SettlementId || "";
	this.expansionCost = 1;
};

EmpireChroniclesTerritoryManager.prototype.AreAdjacent = function(cellA, cellB)
{
	if (!cellA || !cellB)
		return false;

	return Math.abs(cellA.x - cellB.x) <= 1 &&
		Math.abs(cellA.y - cellB.y) <= 1 &&
		(cellA.x !== cellB.x || cellA.y !== cellB.y);
};

EmpireChroniclesTerritoryManager.prototype.CanAddCell = function(territory, cell)
{
	if (!territory || !cell)
		return false;

	if (territory.HasCell(cell.id))
		return false;

	const cells = territory.GetCells();

	if (cells.length === 0)
		return true;

	for (const existing of cells)
	{
		if (this.AreAdjacent(existing, cell))
			return true;
	}

	return false;
};

EmpireChroniclesTerritoryManager.prototype.AddAdjacentCell = function(territory, cell)
{
	if (!this.CanAddCell(territory, cell))
		return false;

	territory.AddCell(cell.id);
	return true;
};

EmpireChroniclesTerritoryManager.prototype.GetSettlementId = function()
{
	return this.settlementId;
};
