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
        post_commentsByUsers: true,
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

      const fetchTheLikedPost = await prisma.post.findFirst({
        where: {
          id: postHasBeenLiked.id,
        },
      });

      res.json(fetchTheLikedPost);
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

      const fetchTheUnLikedPost = await prisma.post.findFirst({
        id: postHasBeenDisliked.id,
      });

      res.json(fetchTheUnLikedPost);
    }
  }),
];

exports.post_comment = [
  asyncHandler(async (req, res, next) => {
    const { id } = req.params;

    const { comment_text } = req.body;

    const getPostById = await prisma.post.findFirst({
      where: {
        id: Number(id),
      },
    });

    await prisma.comments.create({
      data: {
        comment_text: comment_text,
        comments_userId: req.authData.id,
        commented_postId: getPostById.id,
      },
    });

    await prisma.post.update({
      where: {
        id: getPostById.id,
      },

      data: {
        post_comments: {
          increment: 1,
        },
      },
    });

    const fetchThePostWithAComment = await prisma.post.findFirst({
      where: {
        id: Number(getPostById.id),
      },

      include: {
        likedPostByUsers: true,
        post_commentsByUsers: true,
      },
    });

    res.json(fetchThePostWithAComment);
  }),
];

exports.post_comment_reply = [
  asyncHandler(async (req, res, next) => {
    const { id } = req.params;

    const { comment_text, commentId } = req.body;

    const getPostById = await prisma.post.findFirst({
      where: {
        id: Number(id),
      },
    });

    await prisma.comments.create({
      data: {
        comment_text: comment_text,
        comments_userId: req.authData.id,
        commented_postId: getPostById.id,
        parentCommentId: Number(commentId),
      },
    });

    await prisma.post.update({
      where: {
        id: getPostById.id,
      },

      data: {
        post_comments: {
          increment: 1,
        },
      },
    });

    const fetchThePostWithACommentReply = await prisma.post.findFirst({
      where: {
        id: getPostById.id,
      },

      include: {
        likedPostByUsers: true,
        post_commentsByUsers: true,
      },
    });

    res.json(fetchThePostWithACommentReply);
  }),
];

exports.post_delete = [
  asyncHandler(async (req, res, next) => {
    const { id } = req.params;

    const getPostById = await prisma.post.delete({
      where: {
        id: Number(id),
        post_authorId: req.authData.id,
      },
    });

    res.json(getPostById);
  }),
];
