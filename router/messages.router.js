const express = require("express");
const Service = require("../services/index.services");
const validatorHandler = require("../middlewares/validator.handler");
const { getMessageSchema, createMessageSchema, updateMessageSchema } = require("../schemas/message.schema.js");

const router = express.Router();
const messagesService = new Service("Message");

router.get("/", async (req, res, next) => {
  try {
    const messages = await messagesService.getAll();
    res.status(200).json(messages);
  } catch (error) {
    next(error);
  }
});

router.get("/:messageId",
  validatorHandler(getMessageSchema, "params"),
  async (req, res, next) => {
    const { messageId } = req.params;

    try {
      const message = await messagesService.getById(messageId);
      res.status(200).json(message);
    } catch (error) {
      next(error);
    }
  });

router.post("/",
  validatorHandler(createMessageSchema, "body"),
  async (req, res, next) => {
    const { body } = req;

    try {
      const newMessage = await messagesService.add(body);

      res.status(201).json(newMessage);
    } catch (error) {
      next(error);
    }
  });

router.patch("/:messageId",
  validatorHandler(getMessageSchema, "params"),
  validatorHandler(updateMessageSchema, "body"),
  async (req, res, next) => {
    const { messageId } = req.params;
    const { body } = req;

    try {
      const updatedMessage = await messagesService.update(messageId, body);
      res.status(200).json(updatedMessage);
    } catch (error) {
      next(error);
    }
  });

router.delete("/:messageId",
  validatorHandler(getMessageSchema, "params"),
  async (req, res, next) => {
    const { messageId } = req.params;

    try {
      const deletedId = await messagesService.remove(messageId);
      res.status(200).json(deletedId);
    } catch (error) {
      next(error);
    }
  });

module.exports = router;
