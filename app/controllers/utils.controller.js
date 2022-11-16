const fs = require("fs");

const dataTables_bootstrap4_min_css_file = fs.readFileSync('./data/utils/datatables-bs4/css/dataTables.bootstrap4.min.css', {encoding: 'utf-8'});
const responsive_bootstrap4_min_css_file = fs.readFileSync('./data/utils/datatables-responsive/css/responsive.bootstrap4.min.css', {encoding: 'utf-8'});
const buttons_bootstrap4_min_css_file = fs.readFileSync('./data/utils/datatables-buttons/css/buttons.bootstrap4.min.css', {encoding: 'utf-8'});
const jquery_dataTables_min_js_file = fs.readFileSync('./data/utils/datatables/jquery.dataTables.min.js', {encoding: 'utf-8'});
const dataTables_bootstrap4_min_js_file = fs.readFileSync('./data/utils/datatables-bs4/js/dataTables.bootstrap4.min.js', {encoding: 'utf-8'});
const dataTables_responsive_min_js_file = fs.readFileSync('./data/utils/datatables-responsive/js/dataTables.responsive.min.js', {encoding: 'utf-8'});
const responsive_bootstrap4_min_js_file = fs.readFileSync('./data/utils/datatables-responsive/js/responsive.bootstrap4.min.js', {encoding: 'utf-8'});
const dataTables_buttons_min_js_file = fs.readFileSync('./data/utils/datatables-buttons/js/dataTables.buttons.min.js', {encoding: 'utf-8'});
const buttons_bootstrap4_min_js_file = fs.readFileSync('./data/utils/datatables-buttons/js/buttons.bootstrap4.min.js', {encoding: 'utf-8'});
const buttons_html5_min_js_file = fs.readFileSync('./data/utils/datatables-buttons/js/buttons.html5.min.js', {encoding: 'utf-8'});
const buttons_print_min_js_file = fs.readFileSync('./data/utils/datatables-buttons/js/buttons.print.min.js', {encoding: 'utf-8'});
const buttons_colVis_min_js_file = fs.readFileSync('./data/utils/datatables-buttons/js/buttons.colVis.min.js', {encoding: 'utf-8'});
const MarkerCluster_css_file = fs.readFileSync('./data/utils/marker-cluster/MarkerCluster.css', {encoding: 'utf-8'});
const MarkerCluster_Default_css_file = fs.readFileSync('./data/utils/marker-cluster/MarkerCluster.Default.css', {encoding: 'utf-8'});
const leaflet_markercluster_src_js_file = fs.readFileSync('./data/utils/marker-cluster/leaflet.markercluster-src.js', {encoding: 'utf-8'});
const leaflet_heat_js_file = fs.readFileSync('./data/utils/leaflet-heat/leaflet-heat.js', {encoding: 'utf-8'});
const leaflet_spin_min_js_file = fs.readFileSync('./data/utils/leaflet-spin/leaflet.spin.min.js', {encoding: 'utf-8'});
const spin_min_js_file = fs.readFileSync('./data/utils/leaflet-spin/spin.min.js', {encoding: 'utf-8'});

// Retrieve dataTables_bootstrap4_min_css_file
exports.dataTables_bootstrap4_min_css = (req, res) => {
    try {
        res.set('Content-Type', 'text/css');
        res.status(200).send(dataTables_bootstrap4_min_css_file);
    } catch (err) {
        res.status(400).send(err);
    }
};

// Retrieve responsive_bootstrap4_min_css_file
exports.responsive_bootstrap4_min_css = (req, res) => {
    try {
        res.set('Content-Type', 'text/css');
        res.status(200).send(responsive_bootstrap4_min_css_file);
    } catch (err) {
        res.status(400).send(err);
    }
};

// Retrieve buttons_bootstrap4_min_css_file
exports.responsive_bootstrap4_min_css = (req, res) => {
    try {
        res.set('Content-Type', 'text/css');
        res.status(200).send(buttons_bootstrap4_min_css_file);
    } catch (err) {
        res.status(400).send(err);
    }
};

// Retrieve jquery_dataTables_min_js_file
exports.buttons_bootstrap4_min_css = (req, res) => {
    try {
        res.set('Content-Type', 'text/javascript');
        res.status(200).send(jquery_dataTables_min_js_file);
    } catch (err) {
        res.status(400).send(err);
    }
};

// Retrieve dataTables_bootstrap4_min_js_file
exports.jquery_dataTables_min_js = (req, res) => {
    try {
        res.set('Content-Type', 'text/javascript');
        res.status(200).send(dataTables_bootstrap4_min_js_file);
    } catch (err) {
        res.status(400).send(err);
    }
};

// Retrieve responsive_bootstrap4_min_js_file
exports.dataTables_bootstrap4_min_js = (req, res) => {
    try {
        res.set('Content-Type', 'text/javascript');
        res.status(200).send(responsive_bootstrap4_min_js_file);
    } catch (err) {
        res.status(400).send(err);
    }
};

// Retrieve dataTables_buttons_min_js_file
exports.dataTables_buttons_min_js = (req, res) => {
    try {
        res.set('Content-Type', 'text/javascript');
        res.status(200).send(dataTables_buttons_min_js_file);
    } catch (err) {
        res.status(400).send(err);
    }
};

// Retrieve buttons_bootstrap4_min_js_file
exports.buttons_bootstrap4_min_js = (req, res) => {
    try {
        res.set('Content-Type', 'text/javascript');
        res.status(200).send(buttons_bootstrap4_min_js_file);
    } catch (err) {
        res.status(400).send(err);
    }
};

// Retrieve dataTables_responsive_min_js_file
exports.dataTables_responsive_min_js = (req, res) => {
    try {
        res.set('Content-Type', 'text/javascript');
        res.status(200).send(dataTables_responsive_min_js_file);
    } catch (err) {
        res.status(400).send(err);
    }
};

// Retrieve buttons_html5_min_js_file
exports.buttons_html5_min_js = (req, res) => {
    try {
        res.set('Content-Type', 'text/javascript');
        res.status(200).send(buttons_html5_min_js_file);
    } catch (err) {
        res.status(400).send(err);
    }
};

// Retrieve buttons_print_min_js_file
exports.buttons_print_min_js = (req, res) => {
    try {
        res.set('Content-Type', 'text/javascript');
        res.status(200).send(buttons_print_min_js_file);
    } catch (err) {
        res.status(400).send(err);
    }
};

// Retrieve buttons_colVis_min_js_file
exports.buttons_colVis_min_js = (req, res) => {
    try {
        res.set('Content-Type', 'text/javascript');
        res.status(200).send(buttons_colVis_min_js_file);
    } catch (err) {
        res.status(400).send(err);
    }
};

// Retrieve MarkerCluster_css_file
exports.MarkerCluster_css = (req, res) => {
    try {
        res.set('Content-Type', 'text/css');
        res.status(200).send(MarkerCluster_css_file);
    } catch (err) {
        res.status(400).send(err);
    }
};

// Retrieve MarkerCluster_Default_css_file
exports.MarkerCluster_Default_css = (req, res) => {
    try {
        res.set('Content-Type', 'text/css');
        res.status(200).send(MarkerCluster_Default_css_file);
    } catch (err) {
        res.status(400).send(err);
    }
};

// Retrieve leaflet_markercluster_src_js_file
exports.leaflet_markercluster_src_js = (req, res) => {
    try {
        res.set('Content-Type', 'text/javascript');
        res.status(200).send(leaflet_markercluster_src_js_file);
    } catch (err) {
        res.status(400).send(err);
    }
};

// Retrieve leaflet_heat_js_file
exports.leaflet_heat_js = (req, res) => {
    try {
        res.set('Content-Type', 'text/javascript');
        res.status(200).send(leaflet_heat_js_file);
    } catch (err) {
        res.status(400).send(err);
    }
};

// Retrieve leaflet_spin_min_js_file
exports.leaflet_spin_min_js = (req, res) => {
    try {
        res.set('Content-Type', 'text/javascript');
        res.status(200).send(leaflet_spin_min_js_file);
    } catch (err) {
        res.status(400).send(err);
    }
};

// Retrieve spin_min_js_file
exports.spin_min_js = (req, res) => {
    try {
        res.set('Content-Type', 'text/javascript');
        res.status(200).send(spin_min_js_file);
    } catch (err) {
        res.status(400).send(err);
    }
};