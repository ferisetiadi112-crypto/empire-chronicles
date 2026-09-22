// Empire Chronicles building growth.
//
// A building reserves its maximum planned land footprint from the moment
// it is placed. The visible/current building can occupy less land while
// residents progressively upgrade it without relocating the structure.

function EmpireChroniclesBuildingGrowth() {}

EmpireChroniclesBuildingGrowth.prototype.Schema =
	"<element name='BuildingId'>" +
		"<text/>" +
	"</element>" +
	"<element name='CurrentLevel'>" +
		"<integer/>" +
	"</element>" +
	"<element name='MaximumLevel'>" +
		"<integer/>" +
	"</element>";

EmpireChroniclesBuildingGrowth.prototype.Init = function()
{
	this.buildingId = this.template.BuildingId || "";
	this.currentLevel = this.template.CurrentLevel || 1;
	this.maximumLevel = this.template.MaximumLevel || 1;
	this.reservedWidth = 0;
	this.reservedDepth = 0;
	this.reservedCells = [];
};

EmpireChroniclesBuildingGrowth.prototype.SetReservedFootprint =
	function(origin, width, depth)
{
	if (!origin || width < 1 || depth < 1)
		throw new Error("Invalid reserved building footprint");

	this.reservedWidth = width;
	this.reservedDepth = depth;
	this.reservedCells = [];

	for (let y = 0; y < depth; ++y)
	{
		for (let x = 0; x < width; ++x)
		{
			this.reservedCells.push({
				x: origin.x + x,
				y: origin.y + y
			});
		}
	}
};

EmpireChroniclesBuildingGrowth.prototype.GetReservedArea = function()
{
	return this.reservedWidth * this.reservedDepth;
};

EmpireChroniclesBuildingGrowth.prototype.CanUpgrade = function()
{
	return this.currentLevel < this.maximumLevel;
};

EmpireChroniclesBuildingGrowth.prototype.SetLevel = function(level)
{
	if (level < 1 || level > this.maximumLevel)
		throw new Error("Building level is outside the permitted range");

	this.currentLevel = level;
};

EmpireChroniclesBuildingGrowth.prototype.GetState = function()
{
	return {
		buildingId: this.buildingId,
		currentLevel: this.currentLevel,
		maximumLevel: this.maximumLevel,
		reservedWidth: this.reservedWidth,
		reservedDepth: this.reservedDepth,
		reservedArea: this.GetReservedArea(),
		reservedCells: this.reservedCells.slice()
	};
};
EmpireChroniclesBuildingGrowth.prototype.CanApplyUpgradeRules = function(rules, population, wellbeing, technologyLevel)
{
	if (!rules || typeof rules.CanUpgrade !== "function")
		return false;

	return rules.CanUpgrade(population, wellbeing, technologyLevel) &&
		(this.currentLevel < this.maximumLevel);
};

EmpireChroniclesBuildingGrowth.prototype.ShouldAutoUpgrade = function(rules, population, wellbeing, technologyLevel)
{
	if (!rules || typeof rules.IsAutomatic !== "function")
		return false;

	return rules.IsAutomatic() &&
		this.CanApplyUpgradeRules(rules, population, wellbeing, technologyLevel);
};

EmpireChroniclesBuildingGrowth.prototype.RequiresPlayerUpgrade = function(rules)
{
	return rules && typeof rules.RequiresPlayerAction === "function" &&
		rules.RequiresPlayerAction();
};
