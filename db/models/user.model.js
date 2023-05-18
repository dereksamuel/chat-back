const { Model, DataTypes, Sequelize } = require("sequelize");

const USER_TABLE_NAME = "users";

const UserSchema = {
  userId: {
    field: "user_id",
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUID,
    unique: true
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
  role: {
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: "mortal"
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
    field: "created_at"
  }
};

class User extends Model {
  static associate(models) {
    this.hasMany(models.ChannelsUser, {
      as: "channels_user",
      foreignKey: {
        name: "userId"
      }
    });
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
