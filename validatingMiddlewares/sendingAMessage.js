const { body } = require("express-validator");

const messageLengthErr = "must be between 1 and 666 characters";

const sendingAMessage = [
  body("text")
    .trim()
    .isLength({ min: 1, max: 666 })
    .escape()
    .withMessage(`Message text ${messageLengthErr}`),
];

module.exports = sendingAMessage;
