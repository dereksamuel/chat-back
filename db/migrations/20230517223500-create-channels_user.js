"use strict";

const { CHANNELS_USER_TABLE_NAME, ChannelsUserSchema } = require("../models/channels_user.model.js");

module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(CHANNELS_USER_TABLE_NAME, ChannelsUserSchema);
  },

  async down (queryInterface) {
    await queryInterface.dropTable(CHANNELS_USER_TABLE_NAME);
  }
};

