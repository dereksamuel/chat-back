const { Model, DataTypes, Sequelize } = require("sequelize");
const { USER_TABLE_NAME } = require("./user.model");
const { CHANNEL_TABLE_NAME } = require("./channel.model");

const CHANNELS_USER_TABLE_NAME = "channels_users";

const ChannelsUserSchema = {
  channelsUserId: {
    field: "channels_user_id",
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUID
  },
  channelId: {
    field: "channel_id",
    allowNull: false,
    references: {
      model: CHANNEL_TABLE_NAME,
      key: "channel_id"
    },
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUID
  },
  userId: {
    field: "user_id",
    allowNull: false,
    references: {
      model: USER_TABLE_NAME,
      key: "user_id"
    },
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUID,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
    field: "created_at"
  }
};

class ChannelsUser extends Model {
  static associate(models) {
    this.belongsTo(models.Channel, {
      as: "channel"
    });
    this.belongsTo(models.User, {
      as: "user"
    });
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
