const express = require("express");
const passport = require("passport");

const User = require("../services/user.services");
const validatorHandler = require("../middlewares/validator.handler");
const { getUserSchema, createUserSchema, updateUserSchema } = require("../schemas/user.schema");
const { checkRoles } = require("../middlewares/auth.handler");

const router = express.Router();
const userService = new User();

router.use(passport.authenticate("jwt", { session: false }));

router.get("/",
  checkRoles("master"),
  async (req, res, next) => {
    try {
      const users = await userService.getAll();
      res.status(200).json(users);
    } catch (error) {
      next(error);
    }
  });

router.get("/:userId",
  checkRoles("master"),
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
  checkRoles("master"),
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
  checkRoles("master"),
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
