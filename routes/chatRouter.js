const { Router } = require("express");

const chatRouter = Router();

const chatController = require("../controllers/chatController");

chatRouter.post("/", chatController.chat_create);

chatRouter.get("/", chatController.chat_get);

chatRouter.get("/:id", chatController.chat_get_by_id);

chatRouter.post("/:id/message", chatController.chat_send_message);

module.exports = chatRouter;
