const { Router } = require("express");

const userRouter = Router();

const userController = require("../controllers/userController");

userRouter.put("/followers/:id", userController.user_followers);

userRouter.put("/following/:id", userController.user_following);

userRouter.get("/search", userController.users_search);

userRouter.get("/:id", userController.user_get_by_id);

userRouter.put("/:id", userController.user_update_profile);

userRouter.get("/", userController.users_get);

module.exports = userRouter;
