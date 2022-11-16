const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const main_controllers = require('./app/controllers/main.controller');
const utils_controllers = require('./app/controllers/utils.controller');

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
  main_controllers.getAllRegions(req, res);
});

app.get("/get-all-things", (req, res) => {
  main_controllers.getAllObjects(req, res);
});

app.get("/Hexagon_7", (req, res) => {
  main_controllers.getH7(req, res);
});

app.get("/Hexagon_8", (req, res) => {
  main_controllers.getH8(req, res);
});

app.get("/Hexagon_9", (req, res) => {
  main_controllers.getH9(req, res);
});

app.get("/utils/datatables-bs4/css/dataTables.bootstrap4.min.css", (req, res) => {
  utils_controllers.dataTables_bootstrap4_min_css(req, res);
});

app.get("/utils/datatables-responsive/css/responsive.bootstrap4.min.css", (req, res) => {
  utils_controllers.responsive_bootstrap4_min_css(req, res);
});

app.get("/utils/datatables-buttons/css/buttons.bootstrap4.min.css", (req, res) => {
  utils_controllers.responsive_bootstrap4_min_css(req, res);
});

app.get("/utils/datatables/jquery.dataTables.min.js", (req, res) => {
  utils_controllers.buttons_bootstrap4_min_css(req, res);
});

app.get("/utils/datatables-bs4/js/dataTables.bootstrap4.min.js", (req, res) => {
  utils_controllers.jquery_dataTables_min_js(req, res);
});

app.get("/utils/datatables-responsive/js/dataTables.responsive.min.js", (req, res) => {
  utils_controllers.dataTables_bootstrap4_min_js(req, res);
});

app.get("/utils/datatables-responsive/js/responsive.bootstrap4.min.js", (req, res) => {
  utils_controllers.dataTables_buttons_min_js(req, res);
});

app.get("/utils/datatables-buttons/js/dataTables.buttons.min.js", (req, res) => {
  utils_controllers.buttons_bootstrap4_min_js(req, res);
});

app.get("/utils/datatables-buttons/js/buttons.bootstrap4.min.js", (req, res) => {
  utils_controllers.dataTables_responsive_min_js(req, res);
});

app.get("/utils/datatables-buttons/js/buttons.html5.min.js", (req, res) => {
  utils_controllers.buttons_html5_min_js(req, res);
});

app.get("/utils/datatables-buttons/js/buttons.print.min.js", (req, res) => {
  utils_controllers.buttons_print_min_js(req, res);
});

app.get("/utils/datatables-buttons/js/buttons.colVis.min.js", (req, res) => {
  utils_controllers.buttons_colVis_min_js(req, res);
});

app.get("/utils/marker-cluster/MarkerCluster.css", (req, res) => {
  utils_controllers.MarkerCluster_css(req, res);
});

app.get("/utils/marker-cluster/MarkerCluster.Default.css", (req, res) => {
  utils_controllers.MarkerCluster_Default_css(req, res);
});

app.get("/utils/marker-cluster/leaflet.markercluster-src.js", (req, res) => {
  utils_controllers.leaflet_markercluster_src_js(req, res);
});

app.get("/utils/leaflet-heat/leaflet-heat.js", (req, res) => {
  utils_controllers.leaflet_heat_js(req, res);
});

app.get("/utils/leaflet-spin/leaflet.spin.min.js", (req, res) => {
  utils_controllers.leaflet_spin_min_js(req, res);
});

app.get("/utils/leaflet-spin/spin.min.js", (req, res) => {
  utils_controllers.spin_min_js(req, res);
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