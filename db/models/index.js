const { Channel, ChannelSchema } = require("./channel.model");
const { User, UserSchema } = require("./user.model");
const { ChannelsUser, ChannelsUserSchema } = require("./channels_user.model");

function setupModels(sequelizeConnection) {
  User.init(UserSchema, User.config(sequelizeConnection));
  Channel.init(ChannelSchema, Channel.config(sequelizeConnection));
  ChannelsUser.init(ChannelsUserSchema, ChannelsUser.config(sequelizeConnection));
}

module.exports = setupModels;
