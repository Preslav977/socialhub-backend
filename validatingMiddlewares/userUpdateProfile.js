const { body } = require("express-validator");

const lengthError = "must be between 1 and 30 characters";

const takenError = "is already taken";

const prisma = require("../db/client");

const userUpdateProfile = [
  body("username")
    .trim()
    .isLength({ min: 1, max: 30 })
    .escape()
    .withMessage(`Username ${lengthError}`),

  body("username").custom(async (value) => {
    const isUsernameTaken = await prisma.user.findUnique({
      where: {
        username: value,
      },
    });

    if (isUsernameTaken) {
      throw new Error(`First name ${takenError}`);
    }
  }),

  body("display_name")
    .trim()
    .isLength({ min: 1, max: 30 })
    .escape()
    .withMessage(`Display name ${lengthError}`),

  body("display_name").custom(async (value) => {
    const isDisplayNameTaken = await prisma.user.findUnique({
      where: {
        display_name: value,
      },
    });

    if (isDisplayNameTaken) {
      throw new Error(`Display name ${takenError}`);
    }
  }),
];

module.exports = userUpdateProfile;
