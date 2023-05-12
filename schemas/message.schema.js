const Joi = require("joi");

const id = Joi.string().guid({
  version: [
    "uuidv4",
    "uuidv5"
  ]
});
const content = Joi.string().min(3).max(200);

const createMessageSchema = Joi.object({
  content: content.required(),
  channelsUsersId: id.required(),
});

const updateMessageSchema = Joi.object({
  content: content.required()
});

const getMessageSchema = Joi.object({
  messageId: id.required(),
});

module.exports = {
  createMessageSchema,
  updateMessageSchema,
  getMessageSchema,
};
