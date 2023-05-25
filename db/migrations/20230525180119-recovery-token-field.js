"use strict";

const { USER_TABLE_NAME } = require("../models/user.model");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(USER_TABLE_NAME, "recovery_token", {
      field: "recovery_token",
      allowNull: true,
      type: Sequelize.DataTypes.STRING
    });
  },

  async down (queryInterface) {
    await queryInterface.removeColumn(USER_TABLE_NAME, "recovery_token");
  }
};
