require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const dataset = require('./dataset/Survey_Information_Design-parsed.json');
app.use(bodyParser.urlencoded({extended: false}));

// Setup server
const server = app.listen(process.env.PORT || 3000, () => {
  // let host = server.address().address;
  const port = server.address().port;
  console.log(`Example app listening at http://localhost:${port}`);
});

urlencodedParser = bodyParser.urlencoded({extended: false});

app.get('/', (req, res) => {
  const response = [];

  for (const i of dataset) {
    let value = i.oogKleur.trim().toLowerCase();

    // remove spaces
    if (value.includes(' ')) {
      value = value.replace(/ /g, '');
    }

    // convert rgb to hex
    if (value.includes('rgb')) {
      console.log(value);
      value = value.replace(/\./g, ',');
      value = value.replace(/[a-z\(\)]/g, '');
      value = value.split(',', 3);

      // make sure value is inside valid range
      value.forEach((el) => el = Math.min(255, Math.max(0, el)));

      let j = 0;
      for (let i of value) {
        i = (+i).toString(16);
        i = i.length == 1 ? `0${i}` : `${i}`;
        value[j] = i;
        j++;
      }

      value = `#${value.join('')}`;
      console.log(value);
    }

    response.push(value);
  }

  res.json(response);
});
