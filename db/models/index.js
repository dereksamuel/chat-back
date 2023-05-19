const { Channel, ChannelSchema } = require("./channel.model");
const { User, UserSchema } = require("./user.model");
const { ChannelsUser, ChannelsUserSchema } = require("./channels_user.model");
const { Message, MessageSchema } = require("./message.model");

function setupModels(sequelizeConnection) {
  User.init(UserSchema, User.config(sequelizeConnection));
  Channel.init(ChannelSchema, Channel.config(sequelizeConnection));
  ChannelsUser.init(ChannelsUserSchema, ChannelsUser.config(sequelizeConnection));
  Message.init(MessageSchema, Message.config(sequelizeConnection));

  User.associate(sequelizeConnection.models);
  Channel.associate(sequelizeConnection.models);
  ChannelsUser.associate(sequelizeConnection.models);
}

module.exports = setupModels;
