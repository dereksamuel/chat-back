const boom = require("@hapi/boom");
const { models } = require("../libs/sequelize");
const crypto = require("crypto");

class Service {
  constructor(label) {
    this.label = label;
    this.include = null;

    if (label === "ChannelsUser") {
      this.include = ["channel", "user"];
    }
  }

  async getAll() {
    const data = await models[this.label].findAll({
      include: this.include,
      limit: 100
    });
    return data;
  }

  async getById(thingId) {
    const thing = await models[this.label].findByPk(thingId, { include: this.include });
    if (!thing) throw boom.notFound("Id: " + thingId + " Not found");

    return thing;
  }

  async update(thingId, thingData) {
    const thing = await this.getById(thingId);
    await thing.update(thingData);

    return thing;
  }

  async add(thing) {
    let newThing = {
      ...thing,
      [`${this.label.toLowerCase()}Id`]: crypto.randomUUID(),
    };

    const response = await models[this.label].create(newThing);

    return response;
  }

  async remove(thingId) {
    const thing = await this.getById(thingId);
    await thing.destroy();

    return thing;
  }
}

module.exports = Service;
