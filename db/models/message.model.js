const { Model, DataTypes, Sequelize } = require("sequelize");

const MESSAGE_TABLE_NAME = "messages";

const MessageSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  content: {
    allowNull: false,
    type: DataTypes.STRING
  },
  channelsUserId: {
    field: "channels_user_id",
    allowNull: false,
    type: DataTypes.INTEGER
  },
  createdAt: {
    field: "created_at",
    allowNull: false,
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW
  }
};

class Message extends Model {
  static associate() {
    // models
  }

  static config(sequelizeConnection) {
    return {
      sequelize: sequelizeConnection,
      tableName: MESSAGE_TABLE_NAME,
      modelName: "Message",
      timestamps: false
    };
  }
}

module.exports = {
  MESSAGE_TABLE_NAME,
  MessageSchema,
  Message
};
