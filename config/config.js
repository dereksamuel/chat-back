module.exports = {
  env: process.env.NODE_ENV || "dev",
  dbConfig: {
    port: process.env.POSTGRES_PORT || 5001,
    user: encodeURIComponent(process.env.POSTGRES_USER),
    password: encodeURIComponent(process.env.POSTGRES_PASSWORD),
    name: process.env.POSTGRES_DATABASE,
    host: process.env.POSTGRES_HOST
  }
};
