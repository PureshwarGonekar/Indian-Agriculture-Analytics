export const processData = (data) => {
  const yearData = {}; // Storing the max and min production data for each year
  const cropData = {}; // Storing the cumulative yield and area data for each crop

  data.forEach((record) => {
    const year = record["Year"].split(", ")[1];
    const crop = record["Crop Name"];
    const production = parseFloat(record["Crop Production (UOM:t(Tonnes))"]) || 0;
    const yieldValue = parseFloat(record["Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))"]) || 0;
    const area = parseFloat(record["Area Under Cultivation (UOM:Ha(Hectares))"]) || 0;

    if (!yearData[year]) {
      yearData[year] = { max: { crop: crop, production: production }, min: { crop: crop, production: production } };
    }

    // Comparing min and max of each year and Updating it
    if (production > yearData[year].max.production) {
      yearData[year].max = { crop: crop, production: production };
    }
    if (production < yearData[year].min.production) {
      yearData[year].min = { crop: crop, production: production };
    }

    // Initialize cropData for the current crop if not already present
    if (!cropData[crop]) {
      cropData[crop] = { totalYield: 0, totalArea: 0, count: 0 };
    }
    else{
        cropData[crop].totalYield += yieldValue;
        cropData[crop].totalArea += area;
    }
    cropData[crop].count += 1;
  });

//   console.log("yearData",yearData);

  // Transforming yearData into an array for creating table
  const yearTableData = Object.keys(yearData).map((year) => ({
    year,
    maxCrop: yearData[year].max.crop,
    maxProduction: yearData[year].max.production,
    minCrop: yearData[year].min.crop,
    minProduction: yearData[year].min.production,
  }));
//    console.log("yearTableData",yearTableData );


 // Transforming cropData into an array for creating table
  const cropTableData = Object.keys(cropData).map((crop) => ({
    crop,
    avgYield: (cropData[crop].totalYield / cropData[crop].count).toFixed(3),
    avgArea: (cropData[crop].totalArea / cropData[crop].count).toFixed(3),
  }));

  return { yearTableData, cropTableData };
};
