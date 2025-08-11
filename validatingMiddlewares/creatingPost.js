const { body } = require("express-validator");

const lengthError = "must be between 1 and 2000 characters";

const creatingPost = [
  body("content")
    .trim()
    .isLength({ min: 1, max: 2000 })
    .escape()
    .withMessage(`Post content $${lengthError}`),

  body("tag")
    .trim()
    .isLength({ min: 1, max: 30 })
    .escape()
    .withMessage(`Post tag ${lengthError}`),
];

module.exports = creatingPost;
