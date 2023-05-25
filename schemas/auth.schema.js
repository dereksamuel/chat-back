const Joi = require("joi");

const email = Joi.string().email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } });
const password = Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"));
const token = Joi.string().regex(/^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_.+/=]*$/);

const loginSchema = Joi.object({
  email: email.required(),
  password: password.required()
});

const recoverySchema = Joi.object({
  email: email.required()
});

const changePasswordSchema = Joi.object({
  token: token.required(),
  newPassword: password.required()
});

module.exports = {
  loginSchema,
  recoverySchema,
  changePasswordSchema
};
