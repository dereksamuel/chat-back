const express = require("express");
const { faker } = require("@faker-js/faker");

const router = express.Router();

router.get("/", (req, res) => {
  const messages = [];

  for (let index = 0; index < 20; index++) {
    messages.push({
      id: faker.datatype.uuid(),
      content: faker.lorem.sentence(),
      channels_users_id: faker.datatype.uuid(),
    });
  }

  res.json(messages);
});

router.get("/:messageId", (req, res) => {
  const { messageId } = req.params;

  res.json({
    id: messageId,
    name: "Hello World!",
    channels_users_id: "asd4x89xf-sad45s4da6",
  });
});

module.exports = router;
