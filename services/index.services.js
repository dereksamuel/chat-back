const { faker } = require("@faker-js/faker");

class Service {
  constructor(data) {
    this.things = data;
  }

  getAll() {
    return this.things;
  }

  getById(thingId) {
    return this.things.find(thing => thing.id === thingId);
  }

  update(thingId, thingData) {
    const thingIndex = this.findIndex(thingId);

    this.things[thingIndex] = {
      ...this.things[thingIndex],
      ...thingData,
    };

    return this.things[thingIndex];
  }

  add(thing) {
    const newThing = {
      id: faker.datatype.uuid(),
      ...thing
    };
    this.things.push(newThing);
    return newThing;
  }

  findIndex(thingId) {
    const thingIndex = this.things.findIndex(thing => thing.id === thingId);
    if (thingIndex === -1) throw new Error("Thing not found");
    return thingIndex;
  }

  remove(thingId) {
    const thingIndex = this.findIndex(thingId);

    this.things.splice(thingIndex, 1);
    return thingId;
  }
}

module.exports = Service;
