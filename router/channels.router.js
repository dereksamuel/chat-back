const express = require("express");
const { faker } = require("@faker-js/faker");

const router = express.Router();

router.get("/", (req, res) => {
  const channels = [];

  for (let index = 0; index < 20; index++) {
    channels.push({
      id: faker.datatype.uuid(),
      name: faker.person.firstName(),
      description: faker.lorem.sentence(),
    });
  }

  res.json(channels);
});


router.get("/:channelId", (req, res) => {
  const { channelId } = req.params;

  res.json({
    id: channelId,
    name: "Platzi",
    description: "Desc and bio",
  });
});

module.exports = router;
