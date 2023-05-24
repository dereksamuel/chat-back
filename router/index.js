const express = require("express");

const usersRouter = require("./users.router");
const channelsRouter = require("./channels.router");
const channelsUsersRouter = require("./channels_users.router");
const messagesRouter = require("./messages.router");
const profileRouter = require("./profile.router");
const authRouter = require("./auth.router");

function routerApi(app) {
  const apiV1 = express.Router();
  apiV1.use("/users", usersRouter);
  apiV1.use("/channels", channelsRouter);
  apiV1.use("/messages", messagesRouter);
  apiV1.use("/channels_users", channelsUsersRouter);
  apiV1.use("/auth", authRouter);
  apiV1.use("/profile", profileRouter);

  app.use("/api/v1", apiV1);
}

module.exports = routerApi;
