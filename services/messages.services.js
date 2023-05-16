const { faker } = require("@faker-js/faker");
const Service = require("./index.services");

class MessagesService extends Service {
  constructor() {
    const messages = [];

    for (let index = 0; index < 20; index++) {
      messages.push({
        id: faker.datatype.uuid(),
        content: faker.lorem.sentence(),
        channels_users_id: faker.datatype.uuid(),
      });
    }

    super(messages, "Message");
  }
}

module.exports = MessagesService;
