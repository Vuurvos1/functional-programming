require('dotenv').config();
const fs = require('fs');
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

/**
 * Normalize all colors inside a dataset to hex colors
 * @param {array} dataset - Array containing dataset columns
 * @param {string} value - The name of the value you want from the dataset
 * @return {array} array containing normalized hex colors
 */
function convertToHex(dataset, value) {
  return dataset.map((val) => {
    // normalize values
    let color = val[value].trim().toLowerCase().replace(/ /g, '');

    // test if hex is already valid
    if (color.match(/^#[a-f0-9]{6}$/i)) {
      return color;
    }

    // convert rgb to hex
    if (color.includes('rgb')) {
      // remove unnecessary symbols
      color = color.replace(/\./g, ',').replace(/[a-z\(\)]/g, '');
      // convert values to array
      color = color.split(',', 3);

      // make sure value is inside valid range
      color.map((el) => el = Math.min(255, Math.max(0, el)));

      // this has to be in a for loop for some reason
      for (let i = 0; i < color.length; i++) {
        color[i] = (+color[i]).toString(16).padStart(2, '0');
      }

      // create hex value
      color = `#${color.join('')}`;
    }

    // convert named color to hex
    const eyeColors = {
      blauw: '#0000ff',
      bruin: '#a52a2a',
      grijs: '#808080',
      groen: '#008000',
      lichtblauw: '#add8e6',
      rood: '#ff0000',
    };

    if (eyeColors[color]) {
      return eyeColors[color];
    }

    // try prefixing hex values without #
    if (color[0] != '#') {
      console.log(color);
    }

    // check if hex is still valid after converting else undefined
    if (!color.match(/^#[a-f0-9]{6}$/i)) {
      return undefined;
    }

    return color;
  });
}

/**
 * Normalize numbers inside an array
 * @param {array} dataset - Array containing dataset columns
 * @param {string} value - The name of the value you want from the dataset
 * @return {array} array containing normalized numbers
 */
function convertToNumbers(dataset, value) {
  return dataset.map((numb) => parseFloat(numb[value]));
}

app.get('/', (req, res) => {
  const response = convertToHex(dataset, 'oogKleur');

  fs.writeFileSync('output/output.json', JSON.stringify(response));
  res.json(response);
});
