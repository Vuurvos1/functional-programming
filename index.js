require('dotenv').config();
const fs = require('fs');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({extended: false}));

const getData = require('./modules/getData');
const dataHelper = require('./modules/dataHelpers');

// Open-Data-Parkeren-SPECIFICATIES-PARKEERGEBIED
// parking garage capacity, areaId
// https://opendata.rdw.nl/resource/b3us-f26s.json

// GEO Parkeer Garages
// location, areaId
// https://opendata.rdw.nl/resource/t5pc-eb34.json


const coords = [
  [[2, 2], [3, 5], [7, 6], [9, 4], [8, 1]],
];

console.log(dataHelper.polygonCentroid(coords));


/**
 * Main async code
 */
async function mainCode() {
  // const url = 'https://opendata.rdw.nl/resource/m9d7-ebf2.json';
  // const data = await getData.fetchData(url);
  // fs.writeFileSync('output/output.json', JSON.stringify(data));

  const filePath = 'output/specificatiesParkeergebied.json';
  const data = getData.getLocalData(filePath);

  const u = dataHelper.getLocationByAreaId(data);
  console.log(u[0], u[1], u[2]);

  // const filePath = 'output/output.json';
  // const data = getData.getLocalData(filePath);

  // console.log(data[0]);

  // const arr = ['voertuigsoort', 'aantal_wielen'];
  // const x = dataHelper.getColumns(data, arr);

  // fs.writeFileSync('output/voortuigWiel.json', JSON.stringify(x));
}

mainCode();

// Setup server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.get('/', (req, res) => {
  const response = normalizeColor.convertToHex(dataset, 'oogKleur');

  fs.writeFileSync('output/output.json', JSON.stringify(response));
  res.json(response);
});
