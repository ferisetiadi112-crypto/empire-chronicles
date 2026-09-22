// Empire Chronicles building requirements.
//
// Combines technology, settlement stage, territory and prerequisite
// buildings into one availability check.

function EmpireChroniclesBuildingRequirements() {}

EmpireChroniclesBuildingRequirements.prototype.Schema =
	"<element name='TechnologyLevel'>" +
		"<integer/>" +
	"</element>" +
	"<element name='SettlementStage'>" +
		"<text/>" +
	"</element>";

EmpireChroniclesBuildingRequirements.prototype.Init = function()
{
	this.technologyLevel = this.template.TechnologyLevel || 1;
	this.settlementStage = this.template.SettlementStage || "settlement";
};

EmpireChroniclesBuildingRequirements.prototype.GetStageRank = function(stage)
{
	const ranks = {
		settlement: 1,
		town: 2,
		city: 3,
		province: 4,
		capital: 5
	};

	return ranks[stage] || 0;
};

EmpireChroniclesBuildingRequirements.prototype.CanBuild =
	function(building, context)
{
	if (!building || !context)
		return false;

	if ((context.technologyLevel || 0) < building.technologyLevel)
		return false;

	if (this.GetStageRank(context.settlementStage) <
		this.GetStageRank(building.minimumSettlementStage || "settlement"))
		return false;

	if (!context.territoryValid)
		return false;

	const prerequisites = building.prerequisiteBuildings || [];

	for (const prerequisite of prerequisites)
	{
		if (!context.existingBuildings ||
			context.existingBuildings.indexOf(prerequisite) === -1)
			return false;
	}

	return true;
};
