// Empire Chronicles government office.
//
// The office is the settlement control center. It does not define a
// permanent circular boundary; settlement territory remains cell based.

function EmpireChroniclesGovernmentOffice() {}

EmpireChroniclesGovernmentOffice.prototype.Schema =
	"<element name='SettlementId'>" +
		"<text/>" +
	"</element>";

EmpireChroniclesGovernmentOffice.prototype.Init = function()
{
	this.settlementId = this.template.SettlementId || "";
	this.operational = true;
};

EmpireChroniclesGovernmentOffice.prototype.SetOperational = function(value)
{
	this.operational = !!value;
};

EmpireChroniclesGovernmentOffice.prototype.IsOperational = function()
{
	return this.operational;
};

EmpireChroniclesGovernmentOffice.prototype.GetSettlementId = function()
{
	return this.settlementId;
};
