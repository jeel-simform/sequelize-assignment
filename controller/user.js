const sequelize = require("sequelize");
const models = require("../models/index");

const createUser = async (req, res) => {
  try {
    const { name, email, address } = req.body;
    const user = await models.User.create({
      name,
      email,
      address,
    });
    res.status(200).json({
      user,
    });
  } catch (error) {
    console.log(error);
  }
};
const createOrder = async (req, res) => {
  try {
    const { status, deliveryDate } = req.body;
    const order = await models.Order.create({
      status,
      deliveryDate,
    });
    res.status(200).json({
      order,
    });
  } catch (err) {
    console.log(err);
  }
};
const createProduct = async (req, res) => {
  try {
    const { title, price, description } = req.body;
    const product = await models.Product.create({
      title,
      price,
      description,
    });
    res.status(200).json({
      product,
    });
  } catch (err) {
    console.log(err);
  }
};

const userInfo = async (req, res) => {
  const user = await models.User.findAll({
    attributes: [["name", "customer name"]],
    include: {
      model: models.Order,
      where: {
        status: "undelivered",
      },
      attributes: ["deliverydate"],

      include: {
        model: models.Product,
        attributes: ["title"],
      },
    },
  });
  res.send(user);
};
const unDelivery = async (req, res) => {
  try {
    const order = await models.Order.findAll({
      where: {
        status: "undelivered",
      },
    });
    res.json({
      order,
    });
  } catch (err) {
    console.log(err);
  }
};
const mostRecentOrder = async (req, res) => {
  try {
    const order = await models.Order.findAll({
      attributes: ["id", "status", "deliverydate", "userId"],
      order: [["createdAt", "desc"]],
      limit: 5,
      include: models.User,
    });
    res.status(200).json(order);
  } catch (err) {
    console.log(err);
  }
};
const mostActiveUser = async (req, res) => {
  try {
    const order = await models.Order.findAll({
      group: ["userId", "User.id"],
      attributes: [
        [sequelize.fn("COUNT", sequelize.col("userId")), "no_of_orders"],
        "userId",
      ],
      include: models.User,
      order: [["no_of_orders", "desc"]],
      limit: 5,
    });
    // console.log(order);
    res.send(order);
  } catch (er) {
    console.log(er);
  }
};

const mostInActive = async (req, res) => {
  const user = await models.User.findAll({
    attributes: ["name", "email"],
    include: {
      model: models.Order,
      attributes: [],
    },
    where: {
      "$Orders.userId$": null,
    },
  });
  res.send(user);
};
const mostPurchased = async (req, res) => {
  const product = await models.Orderdetail.findAll({
    group: ["productId", "Product.id"],
    attributes: [
      "productId",
      [
        sequelize.fn("COUNT", sequelize.col("productId")),
        "no_of_time_purchased",
      ],
    ],
    include: {
      model: models.Product,
      attributes: ["title", "price"],
    },
    order: [["no_of_time_purchased", "desc"]],
    limit: 5,
  });

  res.send(product);
};
const mostExpense = async (req, res) => {
  const orderDetails = await models.Orderdetail.findAll({
    group: "orderId",
    attributes: [
      "orderId",
      [sequelize.fn("sum", sequelize.col("Product.price")), "total_amount"],
    ],
    include: {
      model: models.Product,
      attributes: [],
    },
    order: [["total_amount", "desc"]],
    limit: 1,
  });
  res.send(orderDetails);
};

const cheapest = async (req, res) => {
  const orderDetails = await models.Orderdetail.findAll({
    group: "orderId",
    attributes: [
      "orderId",
      [sequelize.fn("sum", sequelize.col("Product.price")), "total_amount"],
    ],
    include: {
      model: models.Product,
      attributes: [],
    },
    order: [["total_amount", "asc"]],
    limit: 1,
  });
  res.send(orderDetails);
};
module.exports = {
  unDelivery,
  mostRecentOrder,
  cheapest,
  mostExpense,
  mostPurchased,
  mostActiveUser,
  mostInActive,
  createUser,
  createOrder,
  createProduct,
  userInfo,
};
