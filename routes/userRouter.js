const { Router } = require("express");

const userRouter = Router();

const userController = require("../controllers/userController");

userRouter.get("/:id", userController.user_get_by_id);

userRouter.put("/:id", userController.user_update_profile);

module.exports = userRouter;
