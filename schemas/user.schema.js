const Joi = require("joi");

const userId = Joi.string().guid({
  version: [
    "uuidv4",
    "uuidv5"
  ]
});
const name = Joi.string().min(10).max(30);
const bio = Joi.string().min(10).max(150);
const phone = Joi.string().min(10).max(20);
const email = Joi.string().email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } });
const password = Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"));

const createUserSchema = Joi.object({
  name: name.required(),
  email: email.required(),
  password: password.required(),
  bio,
  phone,
});

const updateUserSchema = Joi.object({
  name,
  bio,
  phone,
  email,
  password
});

const getUserSchema = Joi.object({
  userId: userId.required(),
});

module.exports = {
  createUserSchema,
  updateUserSchema,
  getUserSchema,
};
