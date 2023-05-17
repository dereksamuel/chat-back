const express = require("express");
const UsersService = require("../services/users.services");
const validatorHandler = require("../middlewares/validator.handler");
const { getUserSchema, createUserSchema, updateUserSchema } = require("../schemas/user.schema");

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

router.get("/:userId",
  validatorHandler(getUserSchema, "params"),
  async (req, res, next) => {
    try {
      const { userId } = req.params;
      const user = await userService.getById(userId);
      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  });

router.post("/",
  validatorHandler(createUserSchema, "body"),
  async (req, res, next) => {
    const { body } = req;
    try {
      const newUser = await userService.add(body);

      res.status(201).json(newUser);
    } catch (error) {
      next(error);
    }
  });

router.patch("/:userId",
  validatorHandler(getUserSchema, "params"),
  validatorHandler(updateUserSchema, "body"),
  async (req, res, next) => {
    const { userId } = req.params;
    const { body } = req;

    try {
      const updatedUser = await userService.update(userId, body);
      res.status(200).json(updatedUser);
    } catch (error) {
      next(error);
    }
  });

router.delete("/:userId",
  validatorHandler(getUserSchema, "params"),
  async (req, res, next) => {
    const { userId } = req.params;

    try {
      const idDeleted = await userService.remove(userId);
      res.status(200).json(idDeleted);
    } catch (error) {
      next(error);
    }
  });

module.exports = router;
