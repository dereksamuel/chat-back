const { Sequelize } = require("sequelize");

const { dbConfig } = require("../config/config");
const setupModels = require("../db/models");

const URI = `mysql://${dbConfig.user}:${dbConfig.password}@${dbConfig.host}:${dbConfig.port}/${dbConfig.name}`;
const sequelizeConnection = new Sequelize(URI, {
  dialect: "mysql",
  logging: true
});

setupModels(sequelizeConnection);

sequelizeConnection.sync(); // CREATE TABLES WITH SCHEMAS THAT I had passed before

module.exports = sequelizeConnection;
