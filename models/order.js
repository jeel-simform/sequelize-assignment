"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      // define association here
      Order.belongsTo(models.User, { foreignKey: "userId" });
      Order.belongsToMany(models.Product, {
        through: models.Orderdetail,
        foreignKey: "productId",
      });
      models.Product.belongsToMany(Order, {
        through: models.Orderdetail,
        foreignKey: "orderId",
      });
      Order.hasMany(models.Orderdetail, { foreignKey: "orderId" });
      models.Orderdetail.belongsTo(Order, { foreignKey: "orderId" });
      models.Product.hasMany(models.Orderdetail, { foreignKey: "productId" });
      models.Orderdetail.belongsTo(models.Product, { foreignKey: "productId" });
    }
  }
  Order.init(
    {
      status: DataTypes.STRING,
      deliverydate: DataTypes.DATEONLY,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Order",
    }
  );
  return Order;
};
