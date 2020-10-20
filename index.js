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
    response.push(i.huisDieren);
  }

  res.json(response);
});
