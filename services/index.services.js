const boom = require("@hapi/boom");
const { models } = require("../libs/sequelize");
const crypto = require("crypto");

class Service {
  constructor(data, label) {
    this.things = data;
    this.label = label;
  }

  async getAll() {
    const data = await models[this.label].findAll();
    return data;
  }

  async getById(thingId) {
    const thing = await models[this.label].findByPk(thingId);
    if (!thing) throw boom.notFound("Id: " + thingId + " Not found");

    return thing;
  }

  async update(thingId, thingData) {
    const thing = await this.getById(thingId);
    await thing.update(thingData);

    return thing;
  }

  async add(thing) {
    const newThing = await models[this.label].create({
      ...thing,
      [`${this.label.toLowerCase()}Id`]: crypto.randomUUID()
    });
    return newThing;
  }

  async remove(thingId) {
    const thing = await this.getById(thingId);
    await thing.destroy();

    return thing;
  }
}

module.exports = Service;
