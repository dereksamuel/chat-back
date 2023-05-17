const { Model, DataTypes, Sequelize } = require("sequelize");

const CHANNELS_USER_TABLE_NAME = "channels_users";

const ChannelsUserSchema = {
  channelsuserId: {
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUID,
    field: "channels_user_id"
  },
  channelId: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUID,
    field: "channel_id"
  },
  userId: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUID,
    field: "user_id"
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
    field: "created_at"
  }
};

class ChannelsUser extends Model {
  static associations() {
    // models
  }

  static config(sequelizeConnection) {
    return {
      sequelize: sequelizeConnection,
      tableName: CHANNELS_USER_TABLE_NAME,
      modelName: "ChannelsUser",
      timestamps: false
    };
  }
}

module.exports = {
  CHANNELS_USER_TABLE_NAME,
  ChannelsUserSchema,
  ChannelsUser
};
