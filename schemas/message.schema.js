const Joi = require("joi");

const messageId = Joi.number().integer();
const content = Joi.string().min(3).max(200);

const createMessageSchema = Joi.object({
  content: content.required(),
  channelsUsersId: messageId.required(),
});

const updateMessageSchema = Joi.object({
  content,
  channelsUsersId: messageId
});

const getMessageSchema = Joi.object({
  messageId: messageId.required(),
});

module.exports = {
  createMessageSchema,
  updateMessageSchema,
  getMessageSchema,
};
