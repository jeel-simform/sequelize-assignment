"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Products", [
      {
        title: "formal shirt",
        price: 2200,
        description: " nice formal shirt for man",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "water bottle",
        price: 220,
        description: " nice water bottle ",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "iphone 12",
        price: 65000,
        description: " nice mobile device",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "lenovo thinkpad",
        price: 78000,
        description: " nice laptop",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "smart watch",
        price: 3500,
        description: " nice smart watch",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "air conditioner",
        price: 45000,
        description: " nice ac ever",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "surf excel powder",
        price: 780,
        description: " nice washing powder",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "tata tea",
        price: 450,
        description: " nice tea ever",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "kurta ",
        price: 2200,
        description: " nice kurta for man",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "samsung s22 ",
        price: 45000,
        description: " nice camera phone",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Products", null, {});
  },
};
