const { faker } = require("@faker-js/faker");

class UsersService {
  constructor() {
    this.users = [];
    this.generate();
  }

  generate() {
    for (let index = 0; index < 10; index++) {
      this.users.push({
        id: faker.datatype.uuid(),
        name: faker.person.fullName(),
        email: faker.internet.email(),
        phone: faker.phone.number(),
        password: faker.internet.password(),
        bio: faker.person.bio(),
      });
    }
  }

  getAllUsers() {
    return this.users;
  }

  getUserById(userId) {
    return this.users.find(user => user.id === userId);
  }

  updateUser(userId, userData) {
    const userIndex = this.users.findIndex(user => user.id === userId);
    this.users[userIndex] = {
      ...this.users[userIndex],
      ...userData,
    };
  }

  addUser(user) {
    this.users = [user, ...this.users];
  }

  removeUser(userId) {
    this.users = this.users.filter(user => user.id !== userId);
  }
}

module.exports = UsersService;
