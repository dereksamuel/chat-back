"use strict";

const { UserSchema, USER_TABLE_NAME } = require("../models/user.model");
const { CHANNEL_TABLE_NAME, ChannelSchema } = require("../models/channel.model.js");
const { MESSAGE_TABLE_NAME, MessageSchema } = require("../models/message.model.js");
const { CHANNELS_USER_TABLE_NAME, ChannelsUserSchema } = require("../models/channels_user.model.js");

module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(USER_TABLE_NAME, UserSchema);
    await queryInterface.createTable(CHANNEL_TABLE_NAME, ChannelSchema);
    await queryInterface.createTable(MESSAGE_TABLE_NAME, MessageSchema);
    await queryInterface.createTable(CHANNELS_USER_TABLE_NAME, ChannelsUserSchema);
  },

  async down (queryInterface) {
    await queryInterface.dropTable(USER_TABLE_NAME);
    await queryInterface.dropTable(CHANNEL_TABLE_NAME);
    await queryInterface.dropTable(MESSAGE_TABLE_NAME);
    await queryInterface.dropTable(CHANNELS_USER_TABLE_NAME);
  }
};