const { validationResult } = require("express-validator");

const asyncHandler = require("express-async-handler");

const prisma = require("../db/client");

const upload = require("../middlewares/multer");

const uploadingImage = require("../helper/uploadingImage");
const creatingPost = require("../validatingMiddlewares/creatingPost");

exports.post_create = [
  upload.single("file"),
  creatingPost,

  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);

    const { post_content, post_tag, post_authorId } = req.body;

    const post_image_URL = await uploadingImage(req.file);

    if (!errors.isEmpty()) {
      return res.status(400).send(errors.array());
    } else {
      const createPost = await prisma.post.create({
        data: {
          post_content: post_content,
          post_imageURL: post_image_URL,
          post_tag: post_tag,
          post_likes: 0,
          post_comments: 0,
          createdAt: new Date(),
          post_authorId: Number(post_authorId),
        },
      });

      res.json(createPost);
    }
  }),
];

exports.posts_get = [
  asyncHandler(async (req, res, next) => {
    const getAllPosts = await prisma.post.findMany();

    res.json(getAllPosts);
  }),
];

exports.post_get_by_id = [
  asyncHandler(async (req, res, next) => {
    const { id } = req.params;

    const getPostById = await prisma.post.findFirst({
      where: {
        id: Number(id),
      },
      include: {
        post_author: true,
      },
    });

    res.json(getPostById);
  }),
];

exports.post_like = [
  asyncHandler(async (req, res, next) => {
    const { id } = req.body;

    const getPostById = await prisma.post.findFirst({
      where: {
        id: Number(id),
      },

      include: {
        likedPostByUsers: true,
      },
    });

    const checkIfUserLikedThePost = getPostById.likedPostByUsers.some(
      (user) => user.id === req.authData.id,
    );

    if (!checkIfUserLikedThePost && getPostById.post_likes >= 0) {
      const postHasBeenLiked = await prisma.post.update({
        where: {
          id: Number(id),
        },

        include: {
          likedPostByUsers: true,
        },

        data: {
          post_likes: {
            increment: 1,
          },

          likedPostByUsers: {
            connect: [{ id: req.authData.id }],
          },
        },
      });

      res.json(postHasBeenLiked);
    } else {
      const postHasBeenDisliked = await prisma.post.update({
        where: {
          id: Number(id),
        },

        include: {
          likedPostByUsers: true,
        },

        data: {
          post_likes: {
            decrement: 1,
          },

          likedPostByUsers: {
            disconnect: [{ id: req.authData.id }],
          },
        },
      });

      res.json(postHasBeenDisliked);
    }
  }),
];
