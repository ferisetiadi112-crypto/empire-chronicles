// Empire Chronicles technology system.
//
// The player-facing game uses five modern technology levels. These are
// progression tiers, not historical eras.

function EmpireChroniclesTechnology() {}

EmpireChroniclesTechnology.prototype.Schema =
	"<element name='TechnologyLevel'>" +
		"<integer/>" +
	"</element>";

EmpireChroniclesTechnology.prototype.Init = function()
{
	this.level = this.template.TechnologyLevel || 1;
	this.ClampLevel();
};

EmpireChroniclesTechnology.prototype.ClampLevel = function()
{
	if (this.level < 1)
		this.level = 1;

	if (this.level > 5)
		this.level = 5;
};

EmpireChroniclesTechnology.prototype.GetLevel = function()
{
	return this.level;
};

EmpireChroniclesTechnology.prototype.SetLevel = function(level)
{
	if (level < 1 || level > 5)
		throw new Error("Technology level must be between 1 and 5");

	this.level = level;
};

EmpireChroniclesTechnology.prototype.CanUseTechnology = function(requiredLevel)
{
	return this.level >= requiredLevel;
};

EmpireChroniclesTechnology.prototype.GetProgression = function()
{
	return {
		level: this.level,
		maxLevel: 5
	};
};
