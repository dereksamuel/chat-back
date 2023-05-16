const { Model, DataTypes, Sequelize } = require("sequelize");

const USER_TABLE_NAME = "users";

const UserSchema = {
  userId: {
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV1,
    field: "user_id"
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true
  },
  bio: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  phone: {
    allowNull: true,
    type: DataTypes.STRING,
    unique: true
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
    field: "created_at"
  }
};

class User extends Model {
  static associations() {
    // models
  }

  static config(sequelizeConnection) {
    return {
      sequelize: sequelizeConnection,
      tableName: USER_TABLE_NAME,
      modelName: "User",
      timestamps: false
    };
  }
}

module.exports = {
  USER_TABLE_NAME,
  UserSchema,
  User
};
