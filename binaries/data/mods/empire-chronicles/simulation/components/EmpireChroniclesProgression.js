// Empire Chronicles progression.
//
// Settlement development is driven by population and technology.
// Technology is a requirement for progression, not a historical age.

function EmpireChroniclesProgression() {}

EmpireChroniclesProgression.prototype.Schema =
	"<element name='TechnologyLevel'>" +
		"<integer/>" +
	"</element>";

EmpireChroniclesProgression.prototype.Init = function()
{
	this.technologyLevel = this.template.TechnologyLevel || 1;
};

EmpireChroniclesProgression.prototype.GetRequiredTechnology = function(stage)
{
	const requirements = {
		settlement: 1,
		town: 1,
		city: 1,
		province: 1,
		capital: 1
	};

	return requirements[stage] || 5;
};

EmpireChroniclesProgression.prototype.GetPopulationStage = function(population)
{
	if (population >= 160)
		return "capital";
	if (population >= 110)
		return "province";
	if (population >= 70)
		return "city";
	if (population >= 40)
		return "town";

	return "settlement";
};

EmpireChroniclesProgression.prototype.CanReachStage =
	function(population, targetStage, technologyLevel, cemeteryLevel)
{
	const requiredTechnology = this.GetRequiredTechnology(targetStage);
	const requiredCemetery = targetStage === "city" ? 3 : 0;
	const populationStage = this.GetPopulationStage(population);

	const stageOrder = {
		settlement: 1,
		town: 2,
		city: 3,
		province: 4,
		capital: 5
	};

	return stageOrder[populationStage] >= stageOrder[targetStage] &&
		technologyLevel >= requiredTechnology &&
		(cemeteryLevel || 0) >= requiredCemetery;
};

EmpireChroniclesProgression.prototype.GetNextStage =
	function(population, technologyLevel, cemeteryLevel)
{
	const current = this.GetPopulationStage(population);
	const next = {
		settlement: "town",
		town: "city",
		city: "province",
		province: "capital",
		capital: "capital"
	}[current];

	if (next === current)
		return current;

	return this.CanReachStage(population, next, technologyLevel, cemeteryLevel)
		? next
		: current;
};
