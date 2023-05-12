const { faker } = require("@faker-js/faker");

class MessagesService {
  constructor() {
    this.messages = [];
    this.generate();
  }

  generate() {
    for (let index = 0; index < 20; index++) {
      this.messages.push({
        id: faker.datatype.uuid(),
        content: faker.lorem.sentence(),
        channels_users_id: faker.datatype.uuid(),
      });
    }
  }

  getAllMessages() {
    return this.messages;
  }

  getMessageById(messageId) {
    return this.messages.find(message => message.id === messageId);
  }

  updateMessage(messageId, messageData) {
    const messageIndex = this.messages.findIndex(message => message.id === messageId);
    this.messages[messageIndex] = {
      ...this.messages[messageIndex],
      ...messageData,
    };
  }

  addMessage(message) {
    this.messages = [message, ...this.messages];
  }

  removeMessage(messageId) {
    this.messages = this.messages.filter(message => message.id !== messageId);
  }
}

module.exports = MessagesService;
