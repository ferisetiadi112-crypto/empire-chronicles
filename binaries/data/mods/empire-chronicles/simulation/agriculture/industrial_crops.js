// Empire Chronicles industrial plantation crops.
//
// Oil palm is a large-area plantation resource. Harvested fresh fruit
// bunches can be processed into crude palm oil and later refined.

const EMPIRE_CHRONICLES_INDUSTRIAL_CROPS = [
  {
    id: "oil_palm_plantation",
    category: "plantation",
    product: "fresh_palm_fruit",
    technologyLevel: 2,
    minimumSettlementStage: "town",
    minimumArea: 30
  }
];

function getEmpireChroniclesIndustrialCrop(cropId)
{
	for (const crop of EMPIRE_CHRONICLES_INDUSTRIAL_CROPS)
	{
		if (crop.id === cropId)
			return crop;
	}

	return null;
}

if (typeof globalThis !== "undefined")
	globalThis.EMPIRE_CHRONICLES_INDUSTRIAL_CROPS =
		EMPIRE_CHRONICLES_INDUSTRIAL_CROPS;
