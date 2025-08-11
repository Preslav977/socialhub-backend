const { validationResult } = require("express-validator");

const asyncHandler = require("express-async-handler");

const prisma = require("../db/client");

const upload = require("../middlewares/multer");

const uploadImage = require("../helper/uploadingImage");

const sendingAMessage = require("../validatingMiddlewares/sendingAMessage");

exports.chat_create = [
  asyncHandler(async (req, res, next) => {
    const { senderId, receiverId } = req.body;

    const checkIfChatExistsBetweenUsers = await prisma.chat.findFirst({
      select: {
        senderChat: {
          include: true,
        },

        receiverChat: {
          include: true,
        },
      },

      where: {
        OR: [
          {
            senderChatId: Number(senderId),
            receiverChatId: Number(receiverId),
          },
          {
            senderChatId: Number(senderId),
            receiverChatId: Number(receiverId),
          },
        ],
      },
    });

    if (checkIfChatExistsBetweenUsers !== null) {
      return;
    } else {
      const createChat = await prisma.chat.create({
        data: {
          senderChatId: Number(senderId),
          receiverChatId: Number(receiverId),
        },

        include: {
          senderChat: true,
          receiverChat: true,
          messages: true,
        },
      });

      const chat = await prisma.chat.findFirst({
        where: {
          id: createChat.id,
        },

        include: {
          senderChat: true,
          receiverChat: true,
          messages: true,
        },
      });

      res.json(chat);
    }
  }),
];

exports.chat_get = [
  asyncHandler(async (req, res, next) => {
    const chats = await prisma.chat.findMany({
      where: {
        OR: [
          { senderChatId: req.authData.id },
          { receiverChatId: req.authData.id },
        ],
      },

      include: {
        senderChat: true,
        receiverChat: true,
        messages: true,
      },
    });

    res.json(chats);
  }),
];

exports.chat_get_by_id = [
  asyncHandler(async (req, res, next) => {
    const { id } = req.params;

    const chatById = await prisma.chat.findFirst({
      where: {
        id: id,
      },

      include: {
        messages: {
          orderBy: {
            id: "asc",
          },
        },
        senderChat: true,
        receiverChat: true,
      },
    });

    res.json(chatById);
  }),
];

exports.chat_send_message = [
  sendingAMessage,
  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);

    const { id } = req.params;

    const { text, receiverId } = req.body;

    if (!errors.isEmpty()) {
      return res.status(400).send(errors.array());
    } else {
      await prisma.messages.create({
        data: {
          text: text,
          senderMessageId: req.authData.id,
          receiverMessageId: Number(receiverId),
          chatId: id,
        },
      });

      const chatWithSendMessage = await prisma.chat.findFirst({
        where: {
          id: id,
        },

        include: {
          messages: {
            orderBy: {
              id: "asc",
            },
          },
          senderChat: true,
          receiverChat: true,
        },
      });

      res.json(chatWithSendMessage);
    }
  }),
];

exports.chat_send_image = [
  upload.single("file"),
  asyncHandler(async (req, res, next) => {
    const { id } = req.params;

    const { receiverId } = req.body;

    const imageURL = await uploadImage(req.file);

    if (!imageURL.startsWith("https")) {
      return res.json(imageURL);
    } else {
      await prisma.messages.create({
        data: {
          text: "",
          imageURL: imageURL,
          senderMessageId: req.authData.id,
          receiverMessageId: Number(receiverId),
          chatId: id,
        },
      });

      const chatWithSendImage = await prisma.chat.findFirst({
        where: {
          id: id,
        },

        include: {
          messages: {
            orderBy: {
              id: "asc",
            },
          },
          senderChat: true,
          receiverChat: true,
        },
      });

      res.json(chatWithSendImage);
    }
  }),
];
