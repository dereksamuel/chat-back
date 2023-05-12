const { faker } = require("@faker-js/faker");

class ChannelsService {
  constructor() {
    this.channels = [];
    this.generate();
  }

  generate() {
    for (let index = 0; index < 20; index++) {
      this.channels.push({
        id: faker.datatype.uuid(),
        name: faker.person.firstName(),
        description: faker.lorem.sentence(),
      });
    }
  }

  getAllChannels() {
    return this.channels;
  }

  getChannelById(channelId) {
    return this.channels.find(channel => channel.id === channelId);
  }

  updateChannel(channelId, channelData) {
    const channelIndex = this.channels.findIndex(channel => channel.id === channelId);
    this.channels[channelIndex] = {
      ...this.channels[channelIndex],
      ...channelData,
    };
  }

  addChannel(channel) {
    this.channels = [channel, ...this.channels];
  }

  removeChannel(channelId) {
    this.channels = this.channels.filter(channel => channel.id !== channelId);
  }
}

module.exports = ChannelsService;
