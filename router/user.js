const express = require("express");
const {
  userValidate,
  orderValidate,
  productValidate,
} = require("../middleware/joiValidation");

const router = express.Router();
const {
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
} = require("../controller/user");

router.post("/user", userValidate, createUser);

router.post("/order", orderValidate, createOrder);

router.post("/product", productValidate, createProduct);

router.get("/userinfo", userInfo);

router.get("/undelivered-order", unDelivery);

router.get("/most-recent-orders", mostRecentOrder);

router.get("/most-active-user", mostInActive);

router.get("/in-active-user", mostExpense);

router.get("/most-purchased-order", mostPurchased);

router.get("/most-expensive-order", mostActiveUser);

router.get("/most-cheap-order", cheapest);

module.exports = router;
