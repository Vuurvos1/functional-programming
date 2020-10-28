require('dotenv').config();
const fs = require('fs');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({extended: false}));

const getData = require('./modules/getData');
const dataHelper = require('./modules/dataHelpers');

const coords = [
  [[2, 2], [3, 5], [7, 6], [9, 4], [8, 1]],
];

let xSum = 0;
let ySum = 0;
let len = 0;

for (const coord of coords[0]) {
  xSum += coord[0];
  ySum += coord[1];
  len++;
}

console.log([xSum / len, ySum / len]);
// > 5.8, 3.6

/**
 * Main async code
 */
async function mainCode() {
  // const url = 'https://opendata.rdw.nl/resource/m9d7-ebf2.json';
  // const data = await getData.fetchData(url);
  // fs.writeFileSync('output/output.json', JSON.stringify(data));

  const filePath = 'output/output.json';
  const data = getData.getLocalData(filePath);

  console.log(data[0]);

  const arr = ['voertuigsoort', 'aantal_wielen'];
  const x = dataHelper.getColumns(data, arr);

  fs.writeFileSync('output/voortuigWiel.json', JSON.stringify(x));
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
