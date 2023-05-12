const express = require("express");
const ChannelsService = require("../services/channels.services");

const router = express.Router();
const channelsService = new ChannelsService();

router.get("/", async (req, res, next) => {
  try {
    const channels = await channelsService.getAll();
    res.status(200).json(channels);
  } catch (error) {
    next(error);
  }
});


router.get("/:channelId", async (req, res, next) => {
  const { channelId } = req.params;

  try {
    const channel = await channelsService.getById(channelId);
    res.status(200).json(channel);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res) => {
  const { body } = req;
  const newChannel = await channelsService.add(body);

  res.status(201).json(newChannel);
});

router.patch("/:id", async (req, res, next) => {
  const { id } = req.params;
  const { body } = req;

  try {
    const updatedChannel = await channelsService.update(id, body);
    res.status(200).json(updatedChannel);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  const { id } = req.params;

  try {
    const idDeleted = await channelsService.remove(id);
    res.status(200).json(idDeleted);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
