const { Router } = require("express");

const authRouter = Router();

const userController = require("../controllers/userController");

authRouter.post("/signup", userController.user_signup);

authRouter.post("/login", userController.user_login);

authRouter.post("/login_guest", userController.user_login_guest);

module.exports = authRouter;
