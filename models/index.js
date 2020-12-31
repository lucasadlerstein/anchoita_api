const dbCon = require('../config/db.config.js');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(dbCon.DB, dbCon.USER, dbCon.PASSWORD, {
    host: dbCon.HOST,
    dialect: dbCon.dialect,
    operatorAliases: false,
    pool: {
        max: dbCon.pool.max,
        min: dbCon.pool.min,
        acquire: dbCon.pool.acquire,
        idle: dbCon.pool.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.platos = require("./platos.model.js")(sequelize, Sequelize);
db.vinos = require("./vinos.model.js")(sequelize, Sequelize);
db.cocteleria = require("./cocteleria.model.js")(sequelize, Sequelize);

module.exports = db;