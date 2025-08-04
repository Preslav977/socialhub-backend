const { Router } = require("express");

const postRouter = Router();

const postController = require("../controllers/postController");

postRouter.post("/", postController.post_create);

postRouter.get("/", postController.posts_get);

postRouter.get("/:id", postController.post_get_by_id);

module.exports = postRouter;
