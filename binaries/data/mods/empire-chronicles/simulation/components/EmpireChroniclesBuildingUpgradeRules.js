// Empire Chronicles building upgrade rules.
//
// Rules can be supplied directly by a building's upgrade-level catalog.
// This keeps gameplay thresholds in the building definition instead of
// duplicating them inside the component.

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
	this.upgradeLevels = this.template.UpgradeLevels || [];
};

EmpireChroniclesBuildingUpgradeRules.prototype.SetUpgradeLevels = function(upgradeLevels)
{
	this.upgradeLevels = upgradeLevels || [];
};

EmpireChroniclesBuildingUpgradeRules.prototype.GetNextLevelRule = function(currentLevel)
{
	for (var i = 0; i < this.upgradeLevels.length; ++i)
		if (+this.upgradeLevels[i].level === currentLevel + 1)
			return this.upgradeLevels[i];

	return null;
};

EmpireChroniclesBuildingUpgradeRules.prototype.CanUpgrade = function(population, wellbeing, technologyLevel, currentLevel)
{
	var rule = this.GetNextLevelRule(+currentLevel || 0);

	if (!rule)
		return false;

	return population >= +(rule.minimumPopulation || 0) &&
		wellbeing >= +(rule.requiredWellbeing || 0) &&
		technologyLevel >= +(rule.requiredTechnology || 1);
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
		upgradeLevels: this.upgradeLevels
	};
};
