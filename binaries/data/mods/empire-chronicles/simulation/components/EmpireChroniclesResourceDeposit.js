// Empire Chronicles resource deposit.
//
// Deposits are world-map resource locations. They have finite or renewable
// characteristics defined by the resource type and can support extraction.

function EmpireChroniclesResourceDeposit() {}

EmpireChroniclesResourceDeposit.prototype.Schema =
	"<element name='ResourceId'>" +
		"<text/>" +
	"</element>" +
	"<element name='Amount'>" +
		"<integer/>" +
	"</element>" +
	"<element name='Renewable'>" +
		"<boolean/>" +
	"</element>";

EmpireChroniclesResourceDeposit.prototype.Init = function()
{
	this.resourceId = this.template.ResourceId || "";
	this.amount = Math.max(0, this.template.Amount || 0);
	this.renewable = !!this.template.Renewable;
	this.extractionSiteId = null;
};

EmpireChroniclesResourceDeposit.prototype.CanExtract = function(amount)
{
	return amount > 0 && this.amount >= amount;
};

EmpireChroniclesResourceDeposit.prototype.Extract = function(amount)
{
	if (!this.CanExtract(amount))
		return 0;

	this.amount -= amount;
	return amount;
};

EmpireChroniclesResourceDeposit.prototype.SetExtractionSite =
	function(entityId)
{
	this.extractionSiteId = entityId || null;
};

EmpireChroniclesResourceDeposit.prototype.GetState = function()
{
	return {
		resourceId: this.resourceId,
		amount: this.amount,
		renewable: this.renewable,
		extractionSiteId: this.extractionSiteId
	};
};
