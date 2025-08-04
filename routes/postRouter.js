const { Router } = require("express");

const postRouter = Router();

const postController = require("../controllers/postController");

postRouter.post("/", postController.post_create);

module.exports = postRouter;
