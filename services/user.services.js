const bcrypt = require("bcrypt");

const Service = require("./index.services");
const { models } = require("../libs/sequelize");

class User extends Service {
  constructor() {
    super("User");
  }

  async getByEmail(email) {
    const thing = await models.User.findOne({
      where: { email }
    });
    return thing;
  }

  async add(user) {
    const hash = await bcrypt.hash(user.password, 10);

    let newUser = {
      ...user,
      password: hash
    };

    const response = await models.User.create(newUser);
    delete response.dataValues?.password;

    return response;
  }
}

module.exports = User;
