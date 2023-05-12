const express = require("express");
const ChannelsService = require("../services/channels.services");

const router = express.Router();
const channelsService = new ChannelsService();

router.get("/", async (req, res) => {
  try {
    const channels = await channelsService.getAll();
    res.status(200).json(channels);
  } catch (error) {
    res.status(404).send({
      status: "error",
      message: error.message
    });
  }
});


router.get("/:channelId", async (req, res) => {
  const { channelId } = req.params;

  try {
    const channel = await channelsService.getById(channelId);
    res.status(200).json(channel);
  } catch (error) {
    res.status(404).send({
      status: "error",
      message: error.message
    });
  }
});

router.post("/", async (req, res) => {
  const { body } = req;
  const newChannel = await channelsService.add(body);

  res.status(201).json(newChannel);
});

router.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  try {
    const updatedChannel = await channelsService.update(id, body);
    res.status(200).json(updatedChannel);
  } catch (error) {
    res.status(404).send({
      status: "error",
      message: error.message
    });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const idDeleted = await channelsService.remove(id);
    res.status(200).json(idDeleted);
  } catch (error) {
    res.status(404).send({
      status: "error",
      message: error.message
    });
  }
});

module.exports = router;
