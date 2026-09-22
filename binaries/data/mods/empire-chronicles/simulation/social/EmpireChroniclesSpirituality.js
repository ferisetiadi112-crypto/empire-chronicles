// Empire Chronicles spirituality and culture.
//
// Spirituality is modeled as a social dimension. The simulation does not
// rank or privilege religions; different communities can coexist and have
// different participation, facilities and cultural activities.

function EmpireChroniclesSpirituality() {}

EmpireChroniclesSpirituality.prototype.Schema =
	"<element name='CommunityId'>" +
		"<text/>" +
	"</element>" +
	"<element name='Participation'>" +
		"<decimal/>" +
	"</element>";

EmpireChroniclesSpirituality.prototype.Init = function()
{
	this.communityId = this.template.CommunityId || "";
	this.participation = this.template.Participation || 0;
	this.facilities = 0;
	this.culturalActivities = 0;
	this.socialCohesion = 0;
	this.ClampValues();
};

EmpireChroniclesSpirituality.prototype.ClampValues = function()
{
	this.participation = Math.max(0, Math.min(100, this.participation));
	this.socialCohesion = Math.max(0, Math.min(100, this.socialCohesion));
};

EmpireChroniclesSpirituality.prototype.SetParticipation = function(value)
{
	this.participation = value;
	this.ClampValues();
};

EmpireChroniclesSpirituality.prototype.AddFacility = function()
{
	this.facilities += 1;
};

EmpireChroniclesSpirituality.prototype.AddCulturalActivity = function()
{
	this.culturalActivities += 1;
};

EmpireChroniclesSpirituality.prototype.SetSocialCohesion = function(value)
{
	this.socialCohesion = value;
	this.ClampValues();
};

EmpireChroniclesSpirituality.prototype.GetState = function()
{
	return {
		communityId: this.communityId,
		participation: this.participation,
		facilities: this.facilities,
		culturalActivities: this.culturalActivities,
		socialCohesion: this.socialCohesion
	};
};
