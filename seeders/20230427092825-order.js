"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Orders", [
      {
        status: "undelivered",
        deliverydate: "2023-07-01",
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        status: "undelivered",
        deliverydate: "2023-07-09",
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        status: "delivered",
        deliverydate: "2023-03-01",
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        status: "undelivered",
        deliverydate: "2023-07-25",
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        status: "undelivered",
        deliverydate: "2023-08-01",
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        status: "delivered",
        deliverydate: "2023-08-13",
        userId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        status: "undelivered",
        deliverydate: "2023-08-18",
        userId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        status: "undelivered",
        deliverydate: "2023-06-14",
        userId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        status: "delivered",
        deliverydate: "2023-03-26",
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        status: "undelivered",
        deliverydate: "2023-09-06",
        userId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Orders", null, {});
  },
};
