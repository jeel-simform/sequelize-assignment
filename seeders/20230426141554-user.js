"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Users", [
      {
        name: "jeel",
        email: "jeel@example.com",
        address: "ahmedabad",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "om",
        email: "om@example.com",
        address: "ahmedabad",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "yash",
        email: "yash@example.com",
        address: "ahmedabad",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "dhruv",
        email: "dhruv@example.com",
        address: "baroda",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "neckvy",
        email: "neckvy@example.com",
        address: "ahmedabad",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "khushi",
        email: "khushi@example.com",
        address: "amreli",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "ravi",
        email: "ravi@example.com",
        address: "lunagara",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "drimil",
        email: "drimil@example.com",
        address: "gondal",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "krish",
        email: "krish@example.com",
        address: "motimarad",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "harshit",
        email: "harshit@example.com",
        address: "ahmedabad",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
