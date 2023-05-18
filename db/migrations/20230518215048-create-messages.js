"use strict";

const { MESSAGE_TABLE_NAME, MessageSchema } = require("../models/message.model.js");

module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(MESSAGE_TABLE_NAME, MessageSchema);
  },

  async down (queryInterface) {
    await queryInterface.dropTable(MESSAGE_TABLE_NAME);
  }
};
