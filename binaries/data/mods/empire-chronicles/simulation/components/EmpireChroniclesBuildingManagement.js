// Empire Chronicles building management model.
//
// Each building explicitly declares how it is created and how it develops.
// This keeps construction, community growth, player upgrades and fixed
// structures as separate gameplay behaviors.

function EmpireChroniclesBuildingManagement() {}

EmpireChroniclesBuildingManagement.prototype.Schema =
	"<element name='ManagementType'>" +
		"<text/>" +
	"</element>";

EmpireChroniclesBuildingManagement.prototype.Init = function()
{
	this.managementType = this.template.ManagementType || "player_build";
};

EmpireChroniclesBuildingManagement.prototype.IsLandOnly = function()
{
	return this.managementType === "land_only";
};

EmpireChroniclesBuildingManagement.prototype.IsPlayerBuild = function()
{
	return this.managementType === "player_build";
};

EmpireChroniclesBuildingManagement.prototype.IsCommunityGrowth = function()
{
	return this.managementType === "community_growth";
};

EmpireChroniclesBuildingManagement.prototype.IsPlayerUpgrade = function()
{
	return this.managementType === "player_upgrade";
};

EmpireChroniclesBuildingManagement.prototype.IsFixed = function()
{
	return this.managementType === "fixed";
};

EmpireChroniclesBuildingManagement.prototype.CanPlayerUpgrade = function()
{
	return this.IsPlayerUpgrade();
};

EmpireChroniclesBuildingManagement.prototype.CanCommunityUpgrade = function()
{
	return this.IsCommunityGrowth();
};

EmpireChroniclesBuildingManagement.prototype.GetManagementType = function()
{
	return this.managementType;
};
