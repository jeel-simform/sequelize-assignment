"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Orderdetails", [
      {
        orderId: 1,
        productId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 1,
        productId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 2,
        productId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 2,
        productId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 2,
        productId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 3,
        productId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 3,
        productId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 4,
        productId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 4,
        productId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 4,
        productId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 5,
        productId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 5,
        productId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 6,
        productId: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 6,
        productId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 7,
        productId: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 7,
        productId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 8,
        productId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 8,
        productId: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 9,
        productId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 9,
        productId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 10,
        productId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 10,
        productId: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Orderdetails", null, {});
  },
};
