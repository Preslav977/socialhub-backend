const { validationRequest } = require("express-validator");

const asyncHandler = require("express-async-handler");

const prisma = require("../db/client");

const upload = require("../middlewares/multer");

const uploadImage = require("../helper/uploadingImage");

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

      res.json(createChat);
    }
  }),
];

exports.chat_get = [
  asyncHandler(async (req, res, next) => {
    const getChats = await prisma.chat.findMany({
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

    res.json(getChats);
  }),
];

exports.chat_get_by_id = [
  asyncHandler(async (req, res, next) => {
    const { id } = req.params;

    const findChatById = await prisma.chat.findFirst({
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

    res.json(findChatById);
  }),
];
