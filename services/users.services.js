const { faker } = require("@faker-js/faker");

const Service = require("./index.services");

class UsersService extends Service {
  constructor() {
    const users = [];

    for (let index = 0; index < 10; index++) {
      users.push({
        id: faker.datatype.uuid(),
        name: faker.person.fullName(),
        email: faker.internet.email(),
        phone: faker.phone.number(),
        password: faker.internet.password(),
        bio: faker.person.bio(),
      });
    }

    super(users);
  }
}

module.exports = UsersService;
