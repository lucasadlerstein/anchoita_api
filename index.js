const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./models");

const app = express();

console.log('Comenzando Node Send Express');

db.sequelize.sync();

// Opciones CORS
const opcionesCors = {
    origin: process.env.FRONTEND_URL
}

// Habilitar cors
app.use(cors());

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Puerto de la app
const port = process.env.PORT || 443;

// Rutas
app.use('/api/cocteles', require('./routes/cocteles'));
app.use('/api/general', require('./routes/general'));
app.use('/api/platos', require('./routes/platos'));
app.use('/api/vinos', require('./routes/vinos'));

// Arranar la app
app.listen(port, '0.0.0.0', () => {
    console.log(`servidor funcionando en ${port}`);
});