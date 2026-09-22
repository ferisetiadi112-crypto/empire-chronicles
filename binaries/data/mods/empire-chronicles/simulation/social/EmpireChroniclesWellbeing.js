// Empire Chronicles population wellbeing.
//
// Wellbeing summarizes service and social conditions. It is an outcome
// indicator, not a separate population pool.

function EmpireChroniclesWellbeing() {}

EmpireChroniclesWellbeing.prototype.Schema =
	"<element name='SettlementId'>" +
		"<text/>" +
	"</element>";

EmpireChroniclesWellbeing.prototype.Init = function()
{
	this.settlementId = this.template.SettlementId || "";
	this.education = 0;
	this.healthcare = 0;
	this.housing = 0;
	this.basicServices = 0;
	this.spirituality = 0;
	this.socialCohesion = 0;
	this.economicSecurity = 0;
	this.overall = 0;
};

EmpireChroniclesWellbeing.prototype.SetIndicators = function(indicators)
{
	this.education = this.Clamp(indicators.education);
	this.healthcare = this.Clamp(indicators.healthcare);
	this.housing = this.Clamp(indicators.housing);
	this.basicServices = this.Clamp(indicators.basicServices);
	this.spirituality = this.Clamp(indicators.spirituality);
	this.socialCohesion = this.Clamp(indicators.socialCohesion);
	this.economicSecurity = this.Clamp(indicators.economicSecurity);
	this.Recalculate();
};

EmpireChroniclesWellbeing.prototype.Clamp = function(value)
{
	return Math.max(0, Math.min(100, Number(value) || 0));
};

EmpireChroniclesWellbeing.prototype.Recalculate = function()
{
	this.overall =
		(this.education +
			this.healthcare +
			this.housing +
			this.basicServices +
			this.spirituality +
			this.socialCohesion +
			this.economicSecurity) / 7;

	return this.overall;
};

EmpireChroniclesWellbeing.prototype.GetState = function()
{
	return {
		settlementId: this.settlementId,
		education: this.education,
		healthcare: this.healthcare,
		housing: this.housing,
		basicServices: this.basicServices,
		spirituality: this.spirituality,
		socialCohesion: this.socialCohesion,
		economicSecurity: this.economicSecurity,
		overall: this.overall
	};
};
