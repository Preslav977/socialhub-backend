const { Router } = require("express");

const postRouter = Router();

const postController = require("../controllers/postController");

postRouter.post("/", postController.post_create);

postRouter.get("/", postController.posts_get);

postRouter.get("/:id", postController.post_get_by_id);

postRouter.put("/like/:id", postController.post_like);

postRouter.post("/:id/comment", postController.post_comment);

postRouter.post("/:id/comment/:commentId", postController.post_comment_reply);

module.exports = postRouter;
