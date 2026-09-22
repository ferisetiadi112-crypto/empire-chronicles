// Empire Chronicles building upgrade rules.
//
// Separates automatic community growth from deliberate player upgrades.
// Reserved development space is assumed to exist before an upgrade occurs.

function EmpireChroniclesBuildingUpgradeRules() {}

EmpireChroniclesBuildingUpgradeRules.prototype.Schema =
	"<element name='ManagementType'><text/></element>" +
	"<element name='MinimumPopulation'><integer/></element>" +
	"<element name='RequiredWellbeing'><integer/></element>" +
	"<element name='RequiredTechnology'><integer/></element>";

EmpireChroniclesBuildingUpgradeRules.prototype.Init = function()
{
	this.managementType = this.template.ManagementType || "player_build";
	this.minimumPopulation = +(this.template.MinimumPopulation || 0);
	this.requiredWellbeing = +(this.template.RequiredWellbeing || 0);
	this.requiredTechnology = +(this.template.RequiredTechnology || 1);
};

EmpireChroniclesBuildingUpgradeRules.prototype.CanUpgrade = function(population, wellbeing, technologyLevel)
{
	return population >= this.minimumPopulation &&
		wellbeing >= this.requiredWellbeing &&
		technologyLevel >= this.requiredTechnology;
};

EmpireChroniclesBuildingUpgradeRules.prototype.IsAutomatic = function()
{
	return this.managementType === "community_growth";
};

EmpireChroniclesBuildingUpgradeRules.prototype.RequiresPlayerAction = function()
{
	return this.managementType === "player_upgrade";
};

EmpireChroniclesBuildingUpgradeRules.prototype.GetState = function()
{
	return {
		managementType: this.managementType,
		minimumPopulation: this.minimumPopulation,
		requiredWellbeing: this.requiredWellbeing,
		requiredTechnology: this.requiredTechnology
	};
};
