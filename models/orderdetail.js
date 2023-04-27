"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Orderdetail extends Model {
    static associate(models) {
      // define association here
    }
  }
  Orderdetail.init(
    {
      orderId: DataTypes.INTEGER,
      productId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Orderdetail",
    }
  );
  return Orderdetail;
};
