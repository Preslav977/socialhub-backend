const { Router } = require("express");

const userRouter = Router();

const userController = require("../controllers/userController");

userRouter.get("/:id", userController.user_get_by_id);

module.exports = userRouter;
