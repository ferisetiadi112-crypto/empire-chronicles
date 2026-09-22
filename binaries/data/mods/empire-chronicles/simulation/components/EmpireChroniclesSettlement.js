// Empire Chronicles settlement component.
//
// Settlement territory is cell/tile based. A Government Office is the
// settlement control center; it does not create a permanent circular boundary.

function EmpireChroniclesSettlement() {}

EmpireChroniclesSettlement.prototype.Schema =
	"<element name='SettlementName'>" +
		"<text/>" +
	"</element>" +
	"<element name='CountryId'>" +
		"<text/>" +
	"</element>";

EmpireChroniclesSettlement.prototype.Init = function()
{
	this.settlementName = this.template.SettlementName || "New Settlement";
	this.countryId = this.template.CountryId || "";
	this.stage = "settlement";
	this.population = 20;
	this.governmentOfficeId = null;
	this.territoryCells = [];
	this.buildings = [];
	this.infrastructure = [];
	this.active = false;
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
	this.stage = this.GetStage();
};

EmpireChroniclesSettlement.prototype.GetStage = function()
{
	if (this.population >= 160)
		return "capital";
	if (this.population >= 110)
		return "province";
	if (this.population >= 70)
		return "city";
	if (this.population >= 40)
		return "town";

	return "settlement";
};

EmpireChroniclesSettlement.prototype.GetState = function()
{
	return {
		name: this.settlementName,
		countryId: this.countryId,
		stage: this.stage,
		population: this.population,
		governmentOfficeId: this.governmentOfficeId,
		territoryCells: this.territoryCells.slice(),
		active: this.active
	};
};
