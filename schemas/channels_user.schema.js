const Joi = require("joi");

const channelsUserId = Joi.number().integer();

const createChannelsUserSchema = Joi.object({
  channelId: channelsUserId.required(),
  userId: channelsUserId.required(),
});

const updateChannelsUserSchema = Joi.object({
  channelId: channelsUserId,
  userId: channelsUserId
});

const getChannelsUserSchema = Joi.object({
  channelsUserId: channelsUserId.required(),
});

module.exports = {
  createChannelsUserSchema,
  updateChannelsUserSchema,
  getChannelsUserSchema,
};
