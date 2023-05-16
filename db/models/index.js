const { Channel, ChannelSchema } = require("./channels.model");
const { User, UserSchema } = require("./user.model");

function setupModels(sequelizeConnection) {
  User.init(UserSchema, User.config(sequelizeConnection));
  Channel.init(ChannelSchema, Channel.config(sequelizeConnection));
}

module.exports = setupModels;