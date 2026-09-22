// Empire Chronicles national population component.
//
// This is intentionally statistical: workers, soldiers and unemployed
// are classifications of one national population pool.

function EmpireChroniclesCountry() {}

EmpireChroniclesCountry.prototype.Schema =
	"<element name='CountryName'>" +
		"<text/>" +
	"</element>";

EmpireChroniclesCountry.prototype.Init = function()
{
	this.countryName = this.template.CountryName || "New Country";
	this.technologyLevel = 1;
	this.population = 20;
	this.workers = 20;
	this.soldiers = 0;
	this.unemployed = 0;
};

EmpireChroniclesCountry.prototype.GetPopulation = function()
{
	return this.population;
};

EmpireChroniclesCountry.prototype.SetPopulation = function(population)
{
	if (population < 0)
		throw new Error("Population cannot be negative");

	this.population = population;

	// Keep classifications inside the same national population pool.
	const classified = this.workers + this.soldiers + this.unemployed;
	if (classified > population)
		throw new Error("Population classifications exceed total population");
};

EmpireChroniclesCountry.prototype.SetEmployment = function(workers, soldiers, unemployed)
{
	const total = workers + soldiers + unemployed;

	if (workers < 0 || soldiers < 0 || unemployed < 0)
		throw new Error("Population classifications cannot be negative");

	if (total !== this.population)
		throw new Error("Employment classifications must equal total population");

	this.workers = workers;
	this.soldiers = soldiers;
	this.unemployed = unemployed;
};

EmpireChroniclesCountry.prototype.GetEmployment = function()
{
	return {
		workers: this.workers,
		soldiers: this.soldiers,
		unemployed: this.unemployed
	};
};
