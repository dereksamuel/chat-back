const Joi = require("joi");

const channelId = Joi.number().integer();
const name = Joi.string().min(10).max(30);
const description = Joi.string().min(10).max(150);

const createChannelSchema = Joi.object({
  name: name.required(),
  description
});

const updateChannelSchema = Joi.object({
  name,
  description
});

const getChannelSchema = Joi.object({
  channelId: channelId.required(),
});

module.exports = {
  createChannelSchema,
  updateChannelSchema,
  getChannelSchema,
};
