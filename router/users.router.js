const express = require("express");
const { faker } = require("@faker-js/faker");

const router = express.Router();

router.get("/", (req, res) => {
  const users = [];

  for (let index = 0; index < 10; index++) {
    users.push({
      id: faker.datatype.uuid(),
      name: faker.person.fullName(),
      email: faker.internet.email(),
      phone: faker.phone.number(),
      password: faker.internet.password(),
      bio: faker.person.bio(),
    });
  }

  res.json(users);
});

router.get("/:userId", (req, res) => {
  const { userId } = req.params;

  res.json({
    id: userId,
    name: "Derek",
    email: "11dereksamuel@gmail.com",
    phone: "3154494547",
    password: "1234",
    bio: "I am a full stack developer",
  });
});

module.exports = router;
