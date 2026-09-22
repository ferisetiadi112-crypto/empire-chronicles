// Empire Chronicles cemetery infrastructure.
//
// A settlement normally needs only a small number of maintained cemetery
// areas. Cemetery level represents capacity and public-health standards,
// not a separate population system.

function EmpireChroniclesCemetery() {}

EmpireChroniclesCemetery.prototype.Schema =
	"<element name='SettlementId'>" +
		"<text/>" +
	"</element>" +
	"<element name='Level'>" +
		"<integer/>" +
	"</element>";

EmpireChroniclesCemetery.prototype.Init = function()
{
	this.settlementId = this.template.SettlementId || "";
	this.level = this.template.Level || 1;
	this.capacity = this.GetCapacity();
	this.used = 0;
};

EmpireChroniclesCemetery.prototype.GetCapacity = function()
{
	const capacities = {
		1: 50,
		2: 200,
		3: 1000,
		4: 5000,
		5: 20000
	};

	return capacities[this.level] || capacities[1];
};

EmpireChroniclesCemetery.prototype.SetLevel = function(level)
{
	if (level < 1 || level > 5)
		throw new Error("Cemetery level must be between 1 and 5");

	this.level = level;
	this.capacity = this.GetCapacity();
};

EmpireChroniclesCemetery.prototype.SetUsed = function(used)
{
	if (used < 0)
		throw new Error("Cemetery usage cannot be negative");

	this.used = used;
};

EmpireChroniclesCemetery.prototype.HasCapacity = function(additional)
{
	return this.used + additional <= this.capacity;
};

EmpireChroniclesCemetery.prototype.GetState = function()
{
	return {
		settlementId: this.settlementId,
		level: this.level,
		capacity: this.capacity,
		used: this.used,
		available: Math.max(0, this.capacity - this.used)
	};
};
