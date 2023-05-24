const isProd = process.env.NODE_ENV !== "development";

const evalProd = (env) => {
  return `${env}${isProd ? "_PROD" : ""}`;
};

module.exports = {
  env: process.env.NODE_ENV || "dev",
  dbConfig: {
    port: process.env[evalProd("DB_PORT")] || 5005,
    user: encodeURIComponent(process.env[evalProd("DB_USER")]),
    password: encodeURIComponent(process.env[evalProd("DB_PASSWORD")]),
    name: process.env[evalProd("DB_DATABASE")],
    host: process.env[evalProd("DB_HOST")]
  },
  authConfig: {
    apiKey: process.env.API_KEY,
    jwtKey: process.env.JWT_KEY,
    github: {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }
  },
};
