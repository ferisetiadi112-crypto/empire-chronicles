// Empire Chronicles building upgrade executor.
//
// Applies a validated upgrade to a building growth component.
// The executor does not move the building: reserved development space is
// established at placement time and remains the basis for future growth.

function EmpireChroniclesBuildingUpgradeExecutor() {}

EmpireChroniclesBuildingUpgradeExecutor.prototype.Schema =
	"<element name='ManagementType'><text/></element>";

EmpireChroniclesBuildingUpgradeExecutor.prototype.Init = function()
{
	this.managementType = this.template.ManagementType || "player_build";
};

EmpireChroniclesBuildingUpgradeExecutor.prototype.CanExecute = function(growth, rules, population, wellbeing, technologyLevel)
{
	if (!growth || !rules || typeof growth.CanApplyUpgradeRules !== "function")
		return false;

	return growth.CanApplyUpgradeRules(
		rules,
		population,
		wellbeing,
		technologyLevel
	);
};

EmpireChroniclesBuildingUpgradeExecutor.prototype.Execute = function(growth, rules, population, wellbeing, technologyLevel)
{
	if (!this.CanExecute(growth, rules, population, wellbeing, technologyLevel))
		return false;

	if (rules.IsAutomatic && rules.IsAutomatic())
	{
		if (!growth.ShouldAutoUpgrade(rules, population, wellbeing, technologyLevel))
			return false;
	}
	else if (rules.RequiresPlayerAction && rules.RequiresPlayerAction())
	{
		// Player-driven upgrades are deliberately not executed automatically.
		return false;
	}

	if (typeof growth.ApplyUpgradeProfile === "function" &&
		!growth.ApplyUpgradeProfile(rules))
		return false;

	if (typeof growth.ApplyUpgradeProfile !== "function")
		growth.SetLevel(growth.currentLevel + 1);

	return true;
};

EmpireChroniclesBuildingUpgradeExecutor.prototype.ExecutePlayerUpgrade = function(growth, rules, population, wellbeing, technologyLevel)
{
	if (!growth || !rules || !rules.RequiresPlayerAction || !rules.RequiresPlayerAction())
		return false;

	if (!this.CanExecute(growth, rules, population, wellbeing, technologyLevel))
		return false;

	if (typeof growth.ApplyUpgradeProfile === "function" &&
		!growth.ApplyUpgradeProfile(rules))
		return false;

	if (typeof growth.ApplyUpgradeProfile !== "function")
		growth.SetLevel(growth.currentLevel + 1);

	return true;
};

EmpireChroniclesBuildingUpgradeExecutor.prototype.GetManagementType = function()
{
	return this.managementType;
};
