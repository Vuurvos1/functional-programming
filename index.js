require('dotenv').config();
const fs = require('fs');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({extended: false}));

const getData = require('./modules/getData');

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
