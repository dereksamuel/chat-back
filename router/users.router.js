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
  userService.add(body);

  res.status(201).json({
    message: "User created",
    user: body,
  });
});

router.patch("/:id", (req, res) => {
  const { id } = req.params;
  const { body } = req;

  userService.update(id, body);

  res.status(200).json({
    message: "User updated partially",
    user: body,
    id
  });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  userService.remove(id);

  res.status(200).json({
    message: "User deleted",
    id
  });
});

module.exports = router;
