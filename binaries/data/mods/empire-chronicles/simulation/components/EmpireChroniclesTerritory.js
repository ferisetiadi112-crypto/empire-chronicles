// Empire Chronicles territory.
//
// Territory is a collection of discrete world cells. It is intentionally
// irregular and can grow or shrink as the settlement changes.

function EmpireChroniclesTerritory() {}

EmpireChroniclesTerritory.prototype.Schema =
	"<element name='SettlementId'>" +
		"<text/>" +
	"</element>";

EmpireChroniclesTerritory.prototype.Init = function()
{
	this.settlementId = this.template.SettlementId || "";
	this.cells = [];
};

EmpireChroniclesTerritory.prototype.HasCell = function(cellId)
{
	return this.cells.indexOf(cellId) !== -1;
};

EmpireChroniclesTerritory.prototype.AddCell = function(cellId)
{
	if (cellId === undefined || cellId === null)
		throw new Error("Territory cell id is required");

	if (!this.HasCell(cellId))
		this.cells.push(cellId);

	return this.cells.length;
};

EmpireChroniclesTerritory.prototype.RemoveCell = function(cellId)
{
	const index = this.cells.indexOf(cellId);

	if (index !== -1)
		this.cells.splice(index, 1);

	return this.cells.length;
};

EmpireChroniclesTerritory.prototype.GetCells = function()
{
	return this.cells.slice();
};

EmpireChroniclesTerritory.prototype.GetCellCount = function()
{
	return this.cells.length;
};

EmpireChroniclesTerritory.prototype.GetSettlementId = function()
{
	return this.settlementId;
};
