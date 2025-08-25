const { Router } = require("express");

const postRouter = Router();

const postController = require("../controllers/postController");

postRouter.post("/", postController.post_create_text);

postRouter.get("/following", postController.posts_get_by_following_authors);

postRouter.get("/author", postController.posts_get_by_author);

postRouter.get("/liked", postController.posts_get_by_liked_user);

postRouter.post("/with-image", postController.post_create_with_image);

postRouter.get("/", postController.posts_get);

postRouter.get("/:id", postController.post_get_by_id);

postRouter.put("/like/:id", postController.post_like);

postRouter.post("/:id/comment", postController.post_comment);

postRouter.post("/:id/comment/:commentId", postController.post_comment_reply);

postRouter.delete("/:id", postController.post_delete);

module.exports = postRouter;
