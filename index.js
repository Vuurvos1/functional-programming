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

/**
 * Main async code
 */
async function mainCode() {
  // code to fetch data from the api and save it to a file
  // not using this while testing my code to prevent unesesairy pings to the api
  // const url = 'https://opendata.rdw.nl/resource/m9d7-ebf2.json';
  // const data = await getData.fetchData(url);
  // fs.writeFileSync('output/output.json', JSON.stringify(data));

  const filePathParkeergebied = 'output/specificatiesParkeergebied.json';
  const Parkeergebied = getData.getLocalData(filePathParkeergebied);

  // combine location and areaId
  // const u = dataHelper.getLocationByAreaId(Parkeergebied);
  // console.log(u[0], u[1], u[2]);

  const filePathLocationData = 'output/geoParkeerGarages.json';
  const geoParkeerGarages = getData.getLocalData(filePathLocationData);

  const key = 'areaid';
  const z = dataHelper.combineDataset(Parkeergebied, geoParkeerGarages, key);
  console.log(z[0], z[1], z[2]);

  // const coords = [
  //   [[2, 2], [3, 5], [7, 6], [9, 4], [8, 1]],
  // ];

  // console.log(dataHelper.polygonCentroid(coords));


  // const filePath = 'output/output.json';
  // const data = getData.getLocalData(filePath);
  // const arr = ['voertuigsoort', 'aantal_wielen'];
  // const columns = dataHelper.getColumns(data, arr);
  // fs.writeFileSync('output/voortuigWiel.json', JSON.stringify(columns));
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
