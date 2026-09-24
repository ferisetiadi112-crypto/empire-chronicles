// Engine-facing settlement state for Empire Chronicles.
//
// Settlement territory is cell/tile based. A Government Office is the
// settlement control center; it does not create a permanent circular boundary.
// Population is part of the shared national pool, not a separate population pool.

function EmpireChroniclesSettlement() {}

EmpireChroniclesSettlement.prototype.Schema =
	"<element name='SettlementName'>" +
		"<text/>" +
	"</element>" +
	"<element name='CountryId'>" +
		"<text/>" +
	"</element>" +
	"<element name='Population'>" +
		"<integer/>" +
	"</element>" +
	"<element name='CemeteryLevel'>" +
		"<integer/>" +
	"</element>";

EmpireChroniclesSettlement.prototype.Init = function()
{
	this.settlementName = this.template.SettlementName || "New Settlement";
	this.countryId = this.template.CountryId || "";
	this.stage = "settlement";
	this.population = this.template.Population || 20;
	this.cemeteryLevel = this.template.CemeteryLevel || 0;
	this.governmentOfficeId = null;
	this.territoryCells = [];
	this.buildings = [];
	this.infrastructure = [];
	this.active = false;
	this.UpdateStage();
};

EmpireChroniclesSettlement.prototype.SetGovernmentOffice = function(entityId)
{
	this.governmentOfficeId = entityId || null;
	this.UpdateActiveState();
};

EmpireChroniclesSettlement.prototype.SetTerritoryCells = function(cells)
{
	if (!Array.isArray(cells))
		throw new Error("Settlement territory must be an array of cells");

	this.territoryCells = cells.slice();
	this.UpdateActiveState();
};

EmpireChroniclesSettlement.prototype.IsInsideTerritory = function(cellId)
{
	return this.territoryCells.indexOf(cellId) !== -1;
};

EmpireChroniclesSettlement.prototype.UpdateActiveState = function()
{
	this.active = this.governmentOfficeId !== null &&
		this.territoryCells.length > 0;
};

EmpireChroniclesSettlement.prototype.SetPopulation = function(population)
{
	if (population < 0)
		throw new Error("Settlement population cannot be negative");

	this.population = population;
	this.UpdateStage();
};

EmpireChroniclesSettlement.prototype.GetPopulation = function()
{
	return this.population;
};

EmpireChroniclesSettlement.prototype.SetCemeteryLevel = function(level)
{
	if (level < 0)
		throw new Error("Cemetery level cannot be negative");

	this.cemeteryLevel = level;
	this.UpdateStage();
};

EmpireChroniclesSettlement.prototype.GetCemeteryLevel = function()
{
	return this.cemeteryLevel;
};

EmpireChroniclesSettlement.prototype.UpdateStage = function()
{
	this.stage = this.GetStage();
};

EmpireChroniclesSettlement.prototype.GetStage = function()
{
	const progression = Engine.QueryInterface(
		this.entity,
		IID_EmpireChroniclesProgression
	);
	const technologyLevel = progression ?
		progression.technologyLevel :
		1;

	const stages = [
		{ id: "settlement", population: 20 },
		{ id: "town", population: 40 },
		{ id: "city", population: 70, cemeteryLevel: 3 },
		{ id: "province", population: 110 },
		{ id: "capital", population: 160 }
	];

	let stage = "settlement";
	for (const candidate of stages)
	{
		if (this.population < candidate.population)
			break;
		if (technologyLevel < 1)
			break;
		if (this.cemeteryLevel < (candidate.cemeteryLevel || 0))
			break;

		stage = candidate.id;
	}

	return stage;
};

EmpireChroniclesSettlement.prototype.GetState = function()
{
	return {
		name: this.settlementName,
		countryId: this.countryId,
		stage: this.stage,
		population: this.population,
		cemeteryLevel: this.cemeteryLevel,
		governmentOfficeId: this.governmentOfficeId,
		territoryCells: this.territoryCells.slice(),
		active: this.active
	};
};

Engine.RegisterComponentType(
	IID_EmpireChroniclesSettlement,
	"EmpireChroniclesSettlement",
	EmpireChroniclesSettlement
);
