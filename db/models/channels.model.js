const { Model, DataTypes, Sequelize } = require("sequelize");

const CHANNEL_TABLE_NAME = "channels";

const ChannelSchema = {
  channelId: {
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV1,
    field: "channel_id"
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING
  },
  description: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
    field: "created_at"
  }
};

class Channel extends Model {
  static associations() {
    // models
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
