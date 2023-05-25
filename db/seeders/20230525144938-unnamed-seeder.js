"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
    */
    await queryInterface.bulkInsert("Users", [{
      name: "Derek Paul",
      email: "11dereksamuel@gmail.com",
      bio: "Hello i am the master user",
      phone: "3154494547",
      password: "1234LoL11121314",
      role: "master"
    }], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Users", null, {});
  }
};
