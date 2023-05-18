const { Model, DataTypes, Sequelize } = require("sequelize");

const MESSAGE_TABLE_NAME = "messages";

const MessageSchema = {
  messageId: {
    field: "message_id",
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUID,
    unique: true
  },
  content: {
    allowNull: false,
    type: DataTypes.STRING
  },
  channelsUserId: {
    field: "channels_user_id",
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
