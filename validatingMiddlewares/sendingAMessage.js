const { body } = require("express-validator");

const messageLengthErr = "must not be more than 666 characters";

const sendingAMessage = [
  body("message_text")
    .trim()
    .isLength({ max: 666 })
    .withMessage(`Message text ${messageLengthErr}`),
];

module.exports = sendingAMessage;
