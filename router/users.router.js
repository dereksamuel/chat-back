const express = require("express");
const UsersService = require("../services/users.services");

const router = express.Router();
const userService = new UsersService();

router.get("/", (req, res) => {
  const users = userService.getAll();

  res.status(200).json(users);
});

router.get("/:userId", (req, res) => {
  const { userId } = req.params;
  const user = userService.getById(userId);

  res.status(200).json(user);
});

router.post("/", (req, res) => {
  const { body } = req;
  const newUser = userService.add(body);

  res.status(201).json(newUser);
});

router.patch("/:id", (req, res) => {
  const { id } = req.params;
  const { body } = req;

  const updatedUser = userService.update(id, body);

  res.status(200).json(updatedUser);
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const idDeleted = userService.remove(id);

  res.status(200).json(idDeleted);
});

module.exports = router;
