const express = require("express");
const MessagesService = require("../services/messages.services");

const router = express.Router();
const messagesService = new MessagesService();

router.get("/", (req, res) => {
  const messages = messagesService.getAllMessages();

  res.status(200).json(messages);
});

router.get("/:messageId", (req, res) => {
  const { messageId } = req.params;
  const message = messagesService.getMessageById(messageId);

  res.status(200).json(message);
});

router.post("/", (req, res) => {
  const { body } = req;

  messagesService.addMessage(body);

  res.status(201).json({
    message: "Message created",
    messageCreated: body,
  });
});

router.patch("/:id", (req, res) => {
  const { id } = req.params;
  const { body } = req;

  messagesService.updateMessage(id, body);

  res.status(200).json({
    message: "Message updated partially",
    messageUpdatedPartially: body,
    id
  });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  messagesService.removeMessage(id);

  res.status(200).json({
    message: "Message deleted",
    id
  });
});

module.exports = router;
