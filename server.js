const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./app/models/index.js");

const fs = require("fs");

const regions_dataset = fs.readFileSync('./data/regions/regions_dataset.json', {encoding: 'utf-8'});
const objects_dataset = fs.readdirSync('./data/objects', {encoding: 'utf-8'});
// const hexagons_dataset = fs.readdirSync('./data/hexagons', {encoding: 'utf-8'});

const h_7 = fs.readFileSync('./data/hexagons/predict_hexagon_7.json', {encoding: 'utf-8'});
const h_8 = fs.readFileSync('./data/hexagons/predict_hexagon_8.json', {encoding: 'utf-8'});
const h_9 = fs.readFileSync('./data/hexagons/predict_hexagon_9.json', {encoding: 'utf-8'});

var objects = [];
var hexagons = [];

for (let x in objects_dataset) {
  objects.push(JSON.parse(fs.readFileSync('./data/objects/' + objects_dataset[x], {encoding: 'utf-8'})));
}

// for (let x in hexagons_dataset) {
//   hexagons.push(JSON.parse(fs.readFileSync('./data/hexagons/' + hexagons_dataset[x], {encoding: 'utf-8'})));
// }

const app = express();
var corsOptions = {
  origin: '*'
};
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ 
    message: `It's working! 🙌`
  });
});

app.get("/get-all-regions", (req, res) => {
  try {
    res.status(200).send(regions_dataset);
  } catch (err) {
    res.status(400).send(err);
  }
});

app.get("/get-all-things", (req, res) => {
  try {
    res.status(200).send(objects);
  } catch (err) {
    res.status(400).send(err);
  }
});

// app.get("/get-all-hexagons", (req, res) => {
//   try {
//     res.status(200).send(hexagons);
//   } catch (err) {
//     res.status(400).send(err);
//   }
// });

app.get("/Hexagon_7", (req, res) => {
  try {
    res.status(200).send(h_7);
  } catch (err) {
    res.status(400).send(err);
  }
});

app.get("/Hexagon_8", (req, res) => {
  try {
    res.status(200).send(h_8);
  } catch (err) {
    res.status(400).send(err);
  }
});

app.get("/Hexagon_9", (req, res) => {
  try {
    res.status(200).send(h_9);
  } catch (err) {
    res.status(400).send(err);
  }
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
try { 
  app.listen(PORT, () => {
    console.log(`Port: ${PORT} ✅`);
  });
} catch (err) {
  console.log(err);
  app.listen(PORT++, () => {
    console.log(`Port: ${PORT} ✅`);
  });
}