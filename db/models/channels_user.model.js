const { Model, DataTypes, Sequelize } = require("sequelize");
const { USER_TABLE_NAME } = require("./user.model");
const { CHANNEL_TABLE_NAME } = require("./channel.model");

const CHANNELS_USER_TABLE_NAME = "channels_users";

const ChannelsUserSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  channelId: {
    field: "channel_id",
    references: {
      model: CHANNEL_TABLE_NAME,
      key: "id"
    },
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
    allowNull: false,
    type: DataTypes.INTEGER
  },
  userId: {
    field: "user_id",
    references: {
      model: USER_TABLE_NAME,
      key: "id"
    },
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
    allowNull: false,
    type: DataTypes.INTEGER
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
    this.belongsTo(models.User, { as: "user" });
    this.belongsTo(models.Channel, { as: "channel" });

    this.hasMany(models.Message, {
      as: "message",
      foreignKey: {
        name: "channelsUserId"
      }
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
