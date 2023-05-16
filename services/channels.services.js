const { faker } = require("@faker-js/faker");
const Service = require("./index.services");

class ChannelsService extends Service {
  constructor() {
    const channels = [];

    for (let index = 0; index < 20; index++) {
      channels.push({
        id: faker.datatype.uuid(),
        name: faker.person.firstName(),
        description: faker.lorem.sentence(),
      });
    }

    super(channels, "channels");
  }
}

module.exports = ChannelsService;
