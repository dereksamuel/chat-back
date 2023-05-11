const express = require("express");

const usersRouter = require("./users.router");
const channelsRouter = require("./channels.router");
const messagesRouter = require("./messages.router");

function routerApi(app) {
  const apiV1 = express.Router();
  apiV1.use("/users", usersRouter);
  apiV1.use("/channels", channelsRouter);
  apiV1.use("/messages", messagesRouter);

  app.use("/api/v1", apiV1);
}

module.exports = routerApi;
