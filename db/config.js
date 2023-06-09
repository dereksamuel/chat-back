require("dotenv").config();
const { dbConfig } = require("../config/config");

let URI = "";

URI = `mysql://${dbConfig.user}:${dbConfig.password}@${dbConfig.host}:${dbConfig.port}/${dbConfig.name}`;

module.exports = {
  development: {
    dialect: "mysql",
    url: URI
  },
  production: {
    dialect: "mysql",
    url: URI
  }
};
