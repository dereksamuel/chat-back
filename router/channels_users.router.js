const express = require("express");
const passport = require("passport");

const Service = require("../services/index.services");
const validatorHandler = require("../middlewares/validator.handler");
const {
  getChannelsUserSchema,
  createChannelsUserSchema,
  updateChannelsUserSchema,
} = require("../schemas/channels_user.schema.js");

const router = express.Router();
const channelsUsersService = new Service("ChannelsUser");

router.use(passport.authenticate("jwt", { session: false }));

router.get("/", async (req, res, next) => {
  try {
    const channelsUsers = await channelsUsersService.getAll();
    res.status(200).json(channelsUsers);
  } catch (error) {
    next(error);
  }
});

router.get(
  "/:channelsUserId",
  validatorHandler(getChannelsUserSchema, "params"),
  async (req, res, next) => {
    const { channelsUserId } = req.params;

    try {
      const channelsUser = await channelsUsersService.getById(channelsUserId);
      res.status(200).json(channelsUser);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  "/",
  validatorHandler(createChannelsUserSchema, "body"),
  async (req, res, next) => {
    const { body } = req;
    try {
      const newChannelsUser = await channelsUsersService.add(body);

      res.status(201).json(newChannelsUser);
    } catch (error) {
      next(error);
    }
  }
);

router.patch(
  "/:channelsUserId",
  validatorHandler(getChannelsUserSchema, "params"),
  validatorHandler(updateChannelsUserSchema, "body"),
  async (req, res, next) => {
    const { channelsUserId } = req.params;
    const { body } = req;

    try {
      const updatedChannelsUser = await channelsUsersService.update(
        channelsUserId,
        body
      );
      res.status(200).json(updatedChannelsUser);
    } catch (error) {
      next(error);
    }
  }
);

router.delete(
  "/:channelsUserId",
  validatorHandler(getChannelsUserSchema, "params"),
  async (req, res, next) => {
    const { channelsUserId } = req.params;

    try {
      const idDeleted = await channelsUsersService.remove(channelsUserId);
      res.status(200).json(idDeleted);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
