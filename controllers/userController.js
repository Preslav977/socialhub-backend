const { validationREsult, validationResult } = require("express-validator");

const bcrypt = require("bcryptjs");

const passport = require("passport");

const jwt = require("jsonwebtoken");

const asyncHandler = require("express-async-handler");

const prisma = require("../db/client");

exports.user_signup = [
  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);

    const { username, display_name, password, confirm_password } = req.body;

    bcrypt.hash(password, 10, async (error, hashedPassword) => {
      if (error) {
        console.error("Failed to hash the password", error);

        throw error;
      }

      if (!errors.isEmpty()) {
        res.status(400).send(errors.array());
      } else {
        const signupUser = await prisma.user.create({
          data: {
            username: username,
            display_name: display_name,
            password: hashedPassword,
            confirm_password: hashedPassword,
            bio: "",
            website: "",
            github: "",
            profile_picture: "",
            background_picture: "",
          },
        });

        res.json(signupUser);
      }
    });
  }),
];
