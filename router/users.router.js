const express = require("express");
const UsersService = require("../services/users.services");

const router = express.Router();
const userService = new UsersService();

router.get("/", async (req, res, next) => {
  try {
    const users = await userService.getAll();
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
});

router.get("/:userId", async (req, res, next) => {
  try {
    const { userId } = req.params;
    const user = await userService.getById(userId);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res) => {
  const { body } = req;
  const newUser = await userService.add(body);

  res.status(201).json(newUser);
});

router.patch("/:id", async (req, res, next) => {
  const { id } = req.params;
  const { body } = req;

  try {
    const updatedUser = await userService.update(id, body);
    res.status(200).json(updatedUser);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  const { id } = req.params;

  try {
    const idDeleted = await userService.remove(id);
    res.status(200).json(idDeleted);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
