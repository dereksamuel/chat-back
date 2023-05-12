const express = require("express");
const MessagesService = require("../services/messages.services");

const router = express.Router();
const messagesService = new MessagesService();

router.get("/", (req, res) => {
  const messages = messagesService.getAll();

  res.status(200).json(messages);
});

router.get("/:messageId", (req, res) => {
  const { messageId } = req.params;
  const message = messagesService.getById(messageId);

  res.status(200).json(message);
});

router.post("/", (req, res) => {
  const { body } = req;

  messagesService.add(body);

  res.status(201).json({
    message: "Message created",
    messageCreated: body,
  });
});

router.patch("/:id", (req, res) => {
  const { id } = req.params;
  const { body } = req;

  messagesService.update(id, body);

  res.status(200).json({
    message: "Message updated partially",
    messageUpdatedPartially: body,
    id
  });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  messagesService.remove(id);

  res.status(200).json({
    message: "Message deleted",
    id
  });
});

module.exports = router;
