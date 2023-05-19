const { Model, DataTypes, Sequelize } = require("sequelize");
const { CHANNELS_USER_TABLE_NAME } = require("./channels_user.model");

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
    references: {
      model: CHANNELS_USER_TABLE_NAME,
      key: "id"
    },
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
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
  static associate(models) {
    this.belongsTo(models.ChannelsUser, { as: "channels_user" });
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
