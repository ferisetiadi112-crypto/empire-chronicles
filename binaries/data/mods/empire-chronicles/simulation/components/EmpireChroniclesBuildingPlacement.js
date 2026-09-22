// Empire Chronicles building placement rules.
//
// Buildings must occupy valid settlement territory. Their footprint and
// access cells are checked before placement.

function EmpireChroniclesBuildingPlacement() {}

EmpireChroniclesBuildingPlacement.prototype.Schema =
	"<element name='SettlementId'>" +
		"<text/>" +
	"</element>";

EmpireChroniclesBuildingPlacement.prototype.Init = function()
{
	this.settlementId = this.template.SettlementId || "";
};

EmpireChroniclesBuildingPlacement.prototype.GetFootprintCells = function(origin, width, depth)
{
	const cells = [];

	if (!origin || width < 1 || depth < 1)
		return cells;

	for (let y = 0; y < depth; ++y)
	{
		for (let x = 0; x < width; ++x)
		{
			cells.push({
				x: origin.x + x,
				y: origin.y + y
			});
		}
	}

	return cells;
};

EmpireChroniclesBuildingPlacement.prototype.GetAccessCells = function(origin, width, depth)
{
	const cells = [];

	if (!origin || width < 1 || depth < 1)
		return cells;

	for (let y = -1; y <= depth; ++y)
	{
		for (let x = -1; x <= width; ++x)
		{
			const inside =
				x >= 0 && x < width &&
				y >= 0 && y < depth;

			if (!inside)
			{
				cells.push({
					x: origin.x + x,
					y: origin.y + y
				});
			}
		}
	}

	return cells;
};

EmpireChroniclesBuildingPlacement.prototype.ContainsCell = function(cells, cell)
{
	for (const candidate of cells)
	{
		if (candidate.x === cell.x && candidate.y === cell.y)
			return true;
	}

	return false;
};

EmpireChroniclesBuildingPlacement.prototype.CanPlace = function(
	territoryCells,
	occupiedCells,
	origin,
	width,
	depth)
{
	const footprint = this.GetFootprintCells(origin, width, depth);
	const access = this.GetAccessCells(origin, width, depth);

	for (const cell of footprint)
	{
		if (!this.ContainsCell(territoryCells, cell))
			return false;

		if (this.ContainsCell(occupiedCells, cell))
			return false;
	}

	for (const cell of access)
	{
		if (this.ContainsCell(occupiedCells, cell))
			return false;
	}

	return footprint.length > 0;
};
