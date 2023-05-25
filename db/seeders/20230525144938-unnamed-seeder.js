"use strict";

const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
    */
    const hash = await bcrypt.hash("1234LoL11121314", 10);

    await queryInterface.bulkInsert("users", [{
      name: "Derek Paul",
      email: "11dereksamuel@gmail.com",
      bio: "Hello i am the master user",
      phone: "3154494547",
      password: hash,
      role: "master",
      created_at: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Users", null, {});
  }
};
