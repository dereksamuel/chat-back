const { Model, DataTypes, Sequelize } = require("sequelize");

const CHANNEL_TABLE_NAME = "channels";

const ChannelSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  description: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  createdAt: {
    field: "created_at",
    allowNull: false,
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
  },
};

class Channel extends Model {
  static associate(models) {
    this.hasMany(models.ChannelsUser, {
      as: "channels_users",
      foreignKey: {
        name: "channelId"
      }
    });
  }

  static config(sequelizeConnection) {
    return {
      sequelize: sequelizeConnection,
      tableName: CHANNEL_TABLE_NAME,
      modelName: "Channel",
      timestamps: false,
    };
  }
}

module.exports = {
  CHANNEL_TABLE_NAME,
  ChannelSchema,
  Channel,
};
