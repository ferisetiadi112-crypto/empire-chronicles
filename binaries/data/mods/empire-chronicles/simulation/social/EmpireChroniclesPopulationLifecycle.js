// Empire Chronicles population lifecycle.
//
// Age groups are classifications of the same population pool. They are
// used for demographic simulation and do not create additional population.

function EmpireChroniclesPopulationLifecycle() {}

EmpireChroniclesPopulationLifecycle.prototype.Schema =
	"<element name='CountryId'>" +
		"<text/>" +
	"</element>";

EmpireChroniclesPopulationLifecycle.prototype.Init = function()
{
	this.countryId = this.template.CountryId || "";
	this.children = 0;
	this.youth = 0;
	this.adults = 0;
	this.elderly = 0;
};

EmpireChroniclesPopulationLifecycle.prototype.SetAgeGroups = function(children, youth, adults, elderly)
{
	if (children < 0 || youth < 0 || adults < 0 || elderly < 0)
		throw new Error("Age groups cannot be negative");

	this.children = children;
	this.youth = youth;
	this.adults = adults;
	this.elderly = elderly;
};

EmpireChroniclesPopulationLifecycle.prototype.GetTotal = function()
{
	return this.children + this.youth + this.adults + this.elderly;
};

EmpireChroniclesPopulationLifecycle.prototype.GetShares = function()
{
	const total = this.GetTotal();

	if (total <= 0)
		return { children: 0, youth: 0, adults: 0, elderly: 0 };

	return {
		children: this.children / total,
		youth: this.youth / total,
		adults: this.adults / total,
		elderly: this.elderly / total
	};
};

EmpireChroniclesPopulationLifecycle.prototype.GetState = function()
{
	return {
		countryId: this.countryId,
		children: this.children,
		youth: this.youth,
		adults: this.adults,
		elderly: this.elderly,
		total: this.GetTotal()
	};
};
