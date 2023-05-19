const Joi = require("joi");

const messageId = Joi.number().integer();
const content = Joi.string().min(3).max(200);

const createMessageSchema = Joi.object({
  content: content.required(),
  channelsUserId: messageId.required(),
});

const updateMessageSchema = Joi.object({
  content,
  channelsUserId: messageId
});

const getMessageSchema = Joi.object({
  messageId: messageId.required(),
});

module.exports = {
  createMessageSchema,
  updateMessageSchema,
  getMessageSchema,
};
