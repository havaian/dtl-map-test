const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const controllers = require('./app/controllers/sample.controller');

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
  controllers.getAllRegions(req, res);
});

app.get("/get-all-things", (req, res) => {
  controllers.getAllObjects(req, res);
});

app.get("/Hexagon_7", (req, res) => {
  controllers.getH7(req, res);
});

app.get("/Hexagon_8", (req, res) => {
  controllers.getH8(req, res);
});

app.get("/Hexagon_9", (req, res) => {
  controllers.getH9(req, res);
});

// set port, listen for requests
const PORT = process.env.PORT || 8081;
try { 
  app.listen(PORT, () => {
    console.log(`Port: ${PORT} ✅`);
  });
} catch (err) {
  console.log(err);
}