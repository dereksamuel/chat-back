require("dotenv").config({ path: "../.env" });
const { Client } = require("pg");

async function getConnection() {
  const client = new Client({
    host: "localhost",
    port: 5001,
    user: "dkoder",
    password: "1234",
    database: "chat"
  });

  await client.connect();
  return client;
}

module.exports = getConnection;
