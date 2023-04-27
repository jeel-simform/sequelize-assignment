const Joi = require("joi");
const order = require("../models/order");

const userValidate = (req, res, next) => {
  const userSchema = Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    address: Joi.string().required(),
  });
  const { error } = userSchema.validate(req.body, { abortEarly: false });
  if (error) {
    const { details } = error;
    res.status(500).json({
      error: details,
    });
  } else {
    next();
  }
};

const orderValidate = (req, res, next) => {
  const orderSchema = Joi.object().keys({
    status: Joi.string().required(),
    deliverydate: Joi.string().required(),
    userId: Joi.number().optional(),
  });
  const { error } = orderSchema.validate(req.body, { abortEarly: false });
  if (error) {
    const { details } = error;
    res.status(502).json({
      error: details,
    });
  } else {
    next();
  }
};

const productValidate = (req, res, next) => {
  const productSchema = Joi.object().keys({
    title: Joi.string().required(),
    price: Joi.number().required(),
    description: Joi.string().required(),
  });
  const { error } = productSchema.validate(req.body, { abortEarly: false });
  if (error) {
    const { details } = error;
    res.status(502).json({
      error: details,
    });
  } else {
    next();
  }
};
module.exports = {
  userValidate,
  orderValidate,
  productValidate,
};
