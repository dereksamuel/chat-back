"use strict";

const { CHANNELS_USER_TABLE_NAME, ChannelsUserSchema } = require("../models/channels_user.model.js");
const { UserSchema, USER_TABLE_NAME } = require("../models/user.model");

module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(CHANNELS_USER_TABLE_NAME, ChannelsUserSchema);
    await queryInterface.createTable(USER_TABLE_NAME, UserSchema);
  },

  async down (queryInterface) {
    await queryInterface.dropTable(CHANNELS_USER_TABLE_NAME);
    await queryInterface.dropTable(USER_TABLE_NAME);
  }
};
