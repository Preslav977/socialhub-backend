const { Router } = require("express");

const chatRouter = Router();

const chatController = require("../controllers/chatController");

chatRouter.post("/", chatController.chat_create);

module.exports = chatRouter;
