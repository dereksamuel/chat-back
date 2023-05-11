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

  res.status(200).json(users);
});

router.get("/:userId", (req, res) => {
  const { userId } = req.params;

  res.status(200).json({
    id: userId,
    name: "Derek",
    email: "11dereksamuel@gmail.com",
    phone: "3154494547",
    password: "1234",
    bio: "I am a full stack developer",
  });
});

router.post("/", (req, res) => {
  const { body } = req;

  res.status(201).json({
    message: "User created",
    user: body,
  });
});

module.exports = router;
