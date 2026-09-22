// Empire Chronicles public services.
//
// Education, healthcare, housing and basic services are modeled as service
// capacities for the population. They do not create population themselves.

function EmpireChroniclesPublicServices() {}

EmpireChroniclesPublicServices.prototype.Schema =
	"<element name='SettlementId'>" +
		"<text/>" +
	"</element>";

EmpireChroniclesPublicServices.prototype.Init = function()
{
	this.settlementId = this.template.SettlementId || "";
	this.educationCapacity = 0;
	this.healthcareCapacity = 0;
	this.housingCapacity = 0;
	this.basicServicesCapacity = 0;
};

EmpireChroniclesPublicServices.prototype.SetCapacity = function(service, value)
{
	if (value < 0)
		throw new Error("Service capacity cannot be negative");

	if (service === "education")
		this.educationCapacity = value;
	else if (service === "healthcare")
		this.healthcareCapacity = value;
	else if (service === "housing")
		this.housingCapacity = value;
	else if (service === "basicServices")
		this.basicServicesCapacity = value;
	else
		throw new Error("Unknown public service");
};

EmpireChroniclesPublicServices.prototype.GetCoverage = function(population)
{
	if (population <= 0)
		return {
			education: 100,
			healthcare: 100,
			housing: 100,
			basicServices: 100
		};

	return {
		education: Math.min(100, this.educationCapacity / population * 100),
		healthcare: Math.min(100, this.healthcareCapacity / population * 100),
		housing: Math.min(100, this.housingCapacity / population * 100),
		basicServices: Math.min(100, this.basicServicesCapacity / population * 100)
	};
};

EmpireChroniclesPublicServices.prototype.GetState = function()
{
	return {
		settlementId: this.settlementId,
		educationCapacity: this.educationCapacity,
		healthcareCapacity: this.healthcareCapacity,
		housingCapacity: this.housingCapacity,
		basicServicesCapacity: this.basicServicesCapacity
	};
};
