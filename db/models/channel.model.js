const { Model, DataTypes, Sequelize } = require("sequelize");

const CHANNEL_TABLE_NAME = "channels";

const ChannelSchema = {
  channelId: {
    field: "channel_id",
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUID,
    unique: true
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING
  },
  description: {
    allowNull: true,
    type: DataTypes.STRING
  },
  createdAt: {
    field: "created_at",
    allowNull: false,
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW
  }
};

class Channel extends Model {
  static associate(models) {
    this.hasMany(models.ChannelsUser, {
      as: "channels_user",
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
      timestamps: false
    };
  }
}

module.exports = {
  CHANNEL_TABLE_NAME,
  ChannelSchema,
  Channel
};
