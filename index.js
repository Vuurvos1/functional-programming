require('dotenv').config();
const fs = require('fs');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;

const dataset = require('./dataset/Survey_Information_Design-parsed.json');
app.use(bodyParser.urlencoded({extended: false}));

const normalizeColor = require('./modules/normalizeColor');

// Setup server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.get('/', (req, res) => {
  const response = normalizeColor.convertToHex(dataset, 'oogKleur');

  fs.writeFileSync('output/output.json', JSON.stringify(response));
  res.json(response);
});
