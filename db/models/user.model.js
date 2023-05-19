const { Model, DataTypes, Sequelize } = require("sequelize");

const USER_TABLE_NAME = "users";

const UserSchema = {
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
  password: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  bio: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  phone: {
    allowNull: true,
    type: DataTypes.STRING,
    unique: true,
  },
  role: {
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: "mortal",
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
    field: "created_at",
  },
};

class User extends Model {
  static associate(models) {
    // this.belongsTo(models.ChannelsUser, {
    //   as: "channels_users_user",
    //   foreignKey: {
    //     name: "userId",
    //   },
    // });
    this.hasMany(models.ChannelsUser, {
      as: "channels_users",
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
      timestamps: false,
    };
  }
}

module.exports = {
  USER_TABLE_NAME,
  UserSchema,
  User,
};
