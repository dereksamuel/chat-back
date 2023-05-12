const { faker } = require("@faker-js/faker");
const boom = require("@hapi/boom");

class Service {
  constructor(data) {
    this.things = data;
  }

  getAll() {
    return new Promise((res) => {
      const timer = setTimeout(() => {
        res(this.things);
        clearTimeout(timer);
      }, 2000);
    });
  }

  async getById(thingId) {
    const thing = this.things.find(thing => thing.id === thingId);
    if (!thing) throw boom.notFound("Id: " + thingId + " Not found");

    return thing;
  }

  async update(thingId, thingData) {
    const thingIndex = this.things.findIndex(thing => thing.id === thingId);
    if (thingIndex === -1) throw boom.notFound("Id: " + thingId + " Not found");

    this.things[thingIndex] = {
      ...this.things[thingIndex],
      ...thingData,
    };

    return this.things[thingIndex];
  }

  async add(thing) {
    const newThing = {
      id: faker.datatype.uuid(),
      ...thing
    };
    this.things.push(newThing);
    return newThing;
  }

  async remove(thingId) {
    const thingIndex = this.things.findIndex(thing => thing.id === thingId);
    if (thingIndex === -1) throw boom.notFound("Id: " + thingId + " Not found");

    this.things.splice(thingIndex, 1);
    return thingId;
  }
}

module.exports = Service;
