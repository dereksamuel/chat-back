const express = require("express");
const MessagesService = require("../services/messages.services");

const router = express.Router();
const messagesService = new MessagesService();

router.get("/", async (req, res) => {
  try {
    const messages = await messagesService.getAll();
    res.status(200).json(messages);
  } catch (error) {
    res.status(400).send({
      status: "error",
      message: error.message
    });
  }
});

router.get("/:messageId", async (req, res) => {
  const { messageId } = req.params;

  try {
    const message = await messagesService.getById(messageId);
    res.status(200).json(message);
  } catch (error) {
    res.status(404).send({
      status: "error",
      message: error.message
    });
  }
});

router.post("/", async (req, res) => {
  const { body } = req;
  const newMessage = await messagesService.add(body);

  res.status(201).json(newMessage);
});

router.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  try {
    const updatedMessage = await messagesService.update(id, body);
    res.status(200).json(updatedMessage);
  } catch (error) {
    res.status(404).json({
      status: "error",
      message: error.message
    });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deletedId = await messagesService.remove(id);
    res.status(200).json(deletedId);
  } catch (error) {
    res.status(404).json({
      status: "error",
      message: error.message
    });
  }
});

module.exports = router;
