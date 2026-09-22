// Empire Chronicles demographic transition.
//
// This component calculates demographic pressure from age structure and
// social conditions. It is deliberately a model layer: actual births,
// deaths and migration are resolved later by the country simulation.

function EmpireChroniclesDemography() {}

EmpireChroniclesDemography.prototype.Schema =
	"<element name='CountryId'>" +
		"<text/>" +
	"</element>";

EmpireChroniclesDemography.prototype.Init = function()
{
	this.countryId = this.template.CountryId || "";
	this.birthRate = 0;
	this.deathRate = 0;
	this.migrationBalance = 0;
	this.netGrowthRate = 0;
};

EmpireChroniclesDemography.prototype.Calculate = function(populationLifecycle, wellbeing)
{
	const total = populationLifecycle.GetTotal();

	if (total <= 0)
	{
		this.birthRate = 0;
		this.deathRate = 0;
		this.migrationBalance = 0;
		this.netGrowthRate = 0;
		return 0;
	}

	const shares = populationLifecycle.GetShares();
	const wellbeingScore = wellbeing && typeof wellbeing.overall === "number" ?
		wellbeing.overall : 0;

	// Baseline rates are expressed as annual percentage points.
	// They are intentionally moderate and can later be tuned by difficulty,
	// country traits and technology.
	this.birthRate = 1.2 + shares.adults * 2.0 + shares.youth * 0.4;
	this.deathRate = 0.5 + shares.elderly * 3.0;

	const wellbeingFactor = (wellbeingScore - 50) / 100;
	this.birthRate += wellbeingFactor * 0.4;
	this.deathRate -= wellbeingFactor * 0.3;

	this.birthRate = Math.max(0, this.birthRate);
	this.deathRate = Math.max(0, this.deathRate);

	this.netGrowthRate = this.birthRate - this.deathRate;
	return this.netGrowthRate;
};

EmpireChroniclesDemography.prototype.SetMigrationBalance = function(value)
{
	this.migrationBalance = Number(value) || 0;
};

EmpireChroniclesDemography.prototype.GetAnnualPopulationChange = function(population)
{
	return population * (this.netGrowthRate / 100) + this.migrationBalance;
};

EmpireChroniclesDemography.prototype.GetState = function()
{
	return {
		countryId: this.countryId,
		birthRate: this.birthRate,
		deathRate: this.deathRate,
		migrationBalance: this.migrationBalance,
		netGrowthRate: this.netGrowthRate
	};
};
