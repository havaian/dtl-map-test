const fs = require("fs");

const regions_dataset = fs.readFileSync('./data/regions/regions_dataset.json', {encoding: 'utf-8'});
const objects_dataset = fs.readdirSync('./data/objects', {encoding: 'utf-8'});

const h_7 = fs.readFileSync('./data/hexagons/predict_hexagon_7.json', {encoding: 'utf-8'});
const h_8 = fs.readFileSync('./data/hexagons/predict_hexagon_8.json', {encoding: 'utf-8'});
const h_9 = fs.readFileSync('./data/hexagons/predict_hexagon_9.json', {encoding: 'utf-8'});

var objects = [];

for (let x in objects_dataset) {
  objects.push(JSON.parse(fs.readFileSync('./data/objects/' + objects_dataset[x], {encoding: 'utf-8'})));
}

// Retrieve all regions
exports.getAllRegions = (req, res) => {
    try {
        res.status(200).send(regions_dataset);
    } catch (err) {
        res.status(400).send(err);
    }
};

// Retrieve all objects from the database
exports.getAllObjects = (req, res) => {
    try {
        res.status(200).send(objects);
    } catch (err) {
        res.status(400).send(err);
    }
};

// Find a single thing with an id
exports.getH7 = (req, res) => {
    try {
        res.status(200).send(h_7);
    } catch (err) {
        res.status(400).send(err);
    }
};

// Update a thing by the id in the request
exports.getH8 = (req, res) => {
    try {
        res.status(200).send(h_8);
    } catch (err) {
        res.status(400).send(err);
    }
};

// Delete a thing with the specified id in the request
exports.getH9 = (req, res) => {
    try {
    res.status(200).send(h_9);
    } catch (err) {
        res.status(400).send(err);
    }
};