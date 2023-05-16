require("dotenv").config({ path: "../.env" });
const { Pool } = require("pg");
const { dbConfig } = require("../config/config");

const URI = `postgres://${dbConfig.user}:${dbConfig.password}@${dbConfig.host}:${dbConfig.port}/${dbConfig.name}`;

const pool = new Pool({
  connectionString: URI
});

module.exports = pool;
