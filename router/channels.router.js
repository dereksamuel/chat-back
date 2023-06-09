const express = require("express");
const passport = require("passport");

const Service = require("../services/index.services");
const validatorHandler = require("../middlewares/validator.handler");
const { getChannelSchema, createChannelSchema, updateChannelSchema } = require("../schemas/channel.schema.js");
const { checkRoles } = require("../middlewares/auth.handler");

const router = express.Router();
const channelsService = new Service("Channel");

router.use(passport.authenticate("jwt", { session: false }));

router.get("/",
  checkRoles("master"),
  async (req, res, next) => {
    try {
      const channels = await channelsService.getAll();
      res.status(200).json(channels);
    } catch (error) {
      next(error);
    }
  });

router.get("/:channelId",
  checkRoles("master"),
  validatorHandler(getChannelSchema, "params"),
  async (req, res, next) => {
    const { channelId } = req.params;

    try {
      const channel = await channelsService.getById(channelId);
      res.status(200).json(channel);
    } catch (error) {
      next(error);
    }
  });

router.post("/",
  validatorHandler(createChannelSchema, "body"),
  async (req, res, next) => {
    const { body } = req;
    try {
      const newChannel = await channelsService.add(body);

      res.status(201).json(newChannel);
    } catch (error) {
      next(error);
    }
  });

router.patch("/:channelId",
  checkRoles("master"),
  validatorHandler(getChannelSchema, "params"),
  validatorHandler(updateChannelSchema, "body"),
  async (req, res, next) => {
    const { channelId } = req.params;
    const { body } = req;

    try {
      const updatedChannel = await channelsService.update(channelId, body);
      res.status(200).json(updatedChannel);
    } catch (error) {
      next(error);
    }
  });

router.delete("/:channelId",
  checkRoles("master"),
  validatorHandler(getChannelSchema, "params"),
  async (req, res, next) => {
    const { channelId } = req.params;

    try {
      const idDeleted = await channelsService.remove(channelId);
      res.status(200).json(idDeleted);
    } catch (error) {
      next(error);
    }
  });

module.exports = router;
