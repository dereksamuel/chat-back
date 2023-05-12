const express = require("express");
const ChannelsService = require("../services/channels.services");

const router = express.Router();
const channelsService = new ChannelsService();

router.get("/", (req, res) => {
  const channels = channelsService.getAll();

  res.status(200).json(channels);
});


router.get("/:channelId", (req, res) => {
  const { channelId } = req.params;
  const channel = channelsService.getById(channelId);

  res.status(200).json(channel);
});

router.post("/", (req, res) => {
  const { body } = req;
  const newChannel = channelsService.add(body);

  res.status(201).json(newChannel);
});

router.patch("/:id", (req, res) => {
  const { id } = req.params;
  const { body } = req;

  const updatedChannel = channelsService.update(id, body);

  res.status(200).json(updatedChannel);
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const idDeleted = channelsService.remove(id);

  res.status(200).json(idDeleted);
});

module.exports = router;
