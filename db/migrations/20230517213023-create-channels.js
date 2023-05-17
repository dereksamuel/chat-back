'use strict';

const { UserSchema, USER_TABLE_NAME } = require("../models/user.model");
const { CHANNEL_TABLE_NAME, ChannelSchema } = require("../models/channel.model.js");

module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(USER_TABLE_NAME, UserSchema);
    await queryInterface.createTable(CHANNEL_TABLE_NAME, ChannelSchema);
  },

  async down (queryInterface) {
    await queryInterface.dropTable(USER_TABLE_NAME);
    await queryInterface.dropTable(CHANNEL_TABLE_NAME);
  }
};
