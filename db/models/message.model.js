const { Model, DataTypes, Sequelize } = require("sequelize");

const MESSAGE_TABLE_NAME = "messages";

const MessageSchema = {
  messageId: {
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUID,
    field: "message_id"
  },
  content: {
    allowNull: false,
    type: DataTypes.STRING
  },
  channelsUserId: {
    allowNull: true,
    type: DataTypes.STRING,
    field: "channels_user_id"
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
    field: "created_at"
  }
};

class Message extends Model {
  static associations() {
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
