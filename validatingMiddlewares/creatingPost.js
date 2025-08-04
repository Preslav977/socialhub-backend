const { body } = require("express-validator");

const lengthError = "must be between 1 and 30 characters";

const creatingPost = [
  body("post_content")
    .trim()
    .isLength({ min: 1, max: 30 })
    .escape()
    .withMessage(`Post content $${lengthError}`),

  body("post_tag")
    .trim()
    .isLength({ min: 1, max: 30 })
    .escape()
    .withMessage(`Post tag ${lengthError}`),
];

module.exports = creatingPost;
