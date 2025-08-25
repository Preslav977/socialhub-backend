const { body } = require("express-validator");

const lengthContentError = "must be between 1 and 2000 characters";

const lengthTagError = "must be between 1 and 30 characters";

const creatingPost = [
  body("content")
    .trim()
    .isLength({ min: 1, max: 2000 })
    .escape()
    .withMessage(`Post content ${lengthContentError}`),

  body("tag")
    .trim()
    .isLength({ min: 1, max: 30 })
    .escape()
    .withMessage(`Post tag ${lengthTagError}`),
];

module.exports = creatingPost;
