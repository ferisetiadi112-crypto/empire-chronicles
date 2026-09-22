// Empire Chronicles building definition.
//
// Defines data-driven construction rules. Rendering assets and detailed
// gameplay effects can be connected later without changing placement rules.

function EmpireChroniclesBuildingDefinition() {}

EmpireChroniclesBuildingDefinition.prototype.Schema =
	"<element name='BuildingId'>" +
		"<text/>" +
	"</element>" +
	"<element name='Category'>" +
		"<text/>" +
	"</element>" +
	"<element name='TechnologyLevel'>" +
		"<integer/>" +
	"</element>" +
	"<element name='FootprintWidth'>" +
		"<integer/>" +
	"</element>" +
	"<element name='FootprintDepth'>" +
		"<integer/>" +
	"</element>";

EmpireChroniclesBuildingDefinition.prototype.Init = function()
{
	this.buildingId = this.template.BuildingId || "";
	this.category = this.template.Category || "general";
	this.technologyLevel = this.template.TechnologyLevel || 1;
	this.footprintWidth = this.template.FootprintWidth || 1;
	this.footprintDepth = this.template.FootprintDepth || 1;
};

EmpireChroniclesBuildingDefinition.prototype.GetDefinition = function()
{
	return {
		id: this.buildingId,
		category: this.category,
		technologyLevel: this.technologyLevel,
		footprint: {
			width: this.footprintWidth,
			depth: this.footprintDepth
		}
	};
};

EmpireChroniclesBuildingDefinition.prototype.IsAvailableAtTechnology =
	function(level)
{
		return level >= this.technologyLevel;
	};
