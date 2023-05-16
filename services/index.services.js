const { faker } = require("@faker-js/faker");
const boom = require("@hapi/boom");
const pool = require("../libs/postgres.pool");

// const getConnection = require("../libs/postgres");

class Service {
  constructor(data, label) {
    this.things = data;
    this.label = label;

    this.pool = pool;
    this.pool.on("error", (err) => boom.badImplementation(err));
  }

  async getAll() {
    // const client = await getConnection();
    // const response = await client.query("SELECT * FROM users");

    // return response?.rows;
    const query = "SELECT * FROM users";
    const things = await this.pool.query(query);
    return things.rows;
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
