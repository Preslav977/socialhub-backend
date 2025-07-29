const { Router } = require("express");

const userRouter = Router();

const userController = require("../controllers/userController");

userRouter.post("/signup", userController.user_signup);

userRouter.post("/login", userController.user_login);

module.exports = userRouter;
