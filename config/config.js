module.exports = {
  env: process.env.NODE_ENV || "dev",
  dbConfig: {
    port: process.env.DB_PORT || 5002,
    user: encodeURIComponent(process.env.DB_USER),
    password: encodeURIComponent(process.env.DB_PASSWORD),
    name: process.env.DB_DATABASE,
    host: process.env.DB_HOST
  }
};
