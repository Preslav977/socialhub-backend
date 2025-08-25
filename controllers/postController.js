const { validationResult } = require("express-validator");

const asyncHandler = require("express-async-handler");

const prisma = require("../db/client");

const upload = require("../middlewares/multer");

const uploadingImage = require("../helper/uploadingImage");

const creatingPost = require("../validatingMiddlewares/creatingPost");

exports.post_create_text = [
  creatingPost,

  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);

    const { content, tag, authorId } = req.body;

    console.log(content, tag, authorId);

    if (!errors.isEmpty()) {
      return res.status(400).send(errors.array());
    } else {
      const createPost = await prisma.post.create({
        data: {
          content: content,
          tag: tag,
          likes: 0,
          comments: 0,
          createdAt: new Date(),
          authorId: Number(authorId),
        },
      });

      await prisma.user.update({
        where: {
          id: Number(authorId),
        },

        data: {
          posts: {
            increment: 1,
          },
        },
      });

      res.json(createPost);
    }
  }),
];

exports.post_create_with_image = [
  upload.single("file"),
  creatingPost,
  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);

    const { content, tag, authorId } = req.body;

    const imageURL = await uploadingImage(req.file);

    if (!errors.isEmpty()) {
      return res.status(400).send(errors.array());
    } else {
      if (!imageURL.startsWith("https")) {
        res.json(imageURL);
      } else {
        const createPost = await prisma.post.create({
          data: {
            content: content,
            imageURL: imageURL,
            tag: tag,
            likes: 0,
            comments: 0,
            createdAt: new Date(),
            authorId: Number(authorId),
          },
        });

        await prisma.user.update({
          where: {
            id: Number(authorId),
          },

          data: {
            posts: {
              increment: 1,
            },
          },
        });

        res.json(createPost);
      }
    }
  }),
];

exports.posts_get = [
  asyncHandler(async (req, res, next) => {
    const posts = await prisma.post.findMany();

    if (posts.length === 0) {
      res.json({ message: "Failed to get all posts!" });
    } else {
      res.json(posts);
    }
  }),
];

exports.post_get_by_id = [
  asyncHandler(async (req, res, next) => {
    const { id } = req.params;

    const postById = await prisma.post.findFirst({
      where: {
        id: Number(id),
        authorId: req.authData.id,
      },
      include: {
        author: true,
        postCommentedByUsers: true,
      },
    });

    if (!postById) {
      res.json({ message: "Failed to get a post by ID" });
    } else {
      res.json(postById);
    }
  }),
];

exports.posts_get_by_liked_user = [
  asyncHandler(async (req, res, next) => {
    const posts = await prisma.post.findMany({
      where: {
        postLikedByUsers: {
          some: {
            id: req.authData.id,
          },
        },
      },

      include: {
        postLikedByUsers: true,
      },
    });

    res.json(posts);
  }),
];

exports.posts_get_by_author = [
  asyncHandler(async (req, res, next) => {
    const posts = await prisma.post.findMany({
      where: {
        authorId: req.authData.id,
      },
    });

    if (posts.length === 0) {
      res.json({ message: "Failed to get all author posts!" });
    } else {
      res.json(posts);
    }
  }),
];

exports.posts_get_by_following_authors = [
  asyncHandler(async (req, res, next) => {
    const users = await prisma.user.findFirst({
      where: {
        id: req.authData.id,
      },

      include: {
        following: true,
      },
    });

    const usersFollowersId = users.following.map(
      (followingUser) => followingUser.id,
    );

    const posts = await prisma.post.findMany({
      where: {
        authorId: {
          in: usersFollowersId,
        },
      },
    });

    res.json(posts);
  }),
];

exports.post_like = [
  asyncHandler(async (req, res, next) => {
    const { id } = req.body;

    const postById = await prisma.post.findFirst({
      where: {
        id: Number(id),
      },

      include: {
        postLikedByUsers: true,
      },
    });

    const checkIfUserLikedThePost = postById.postLikedByUsers.some(
      (user) => user.id === req.authData.id,
    );

    if (!checkIfUserLikedThePost && postById.likes >= 0) {
      const postHasBeenLiked = await prisma.post.update({
        where: {
          id: Number(id),
        },

        include: {
          postLikedByUsers: true,
        },

        data: {
          likes: {
            increment: 1,
          },

          postLikedByUsers: {
            connect: [{ id: req.authData.id }],
          },
        },
      });

      const likedPost = await prisma.post.findFirst({
        where: {
          id: postHasBeenLiked.id,
        },

        include: {
          postLikedByUsers: true,
        },
      });

      res.json(likedPost);
    } else {
      const postHasBeenDisliked = await prisma.post.update({
        where: {
          id: Number(id),
        },

        include: {
          postLikedByUsers: true,
        },

        data: {
          likes: {
            decrement: 1,
          },

          postLikedByUsers: {
            disconnect: [{ id: req.authData.id }],
          },
        },
      });

      const unLikedPost = await prisma.post.findFirst({
        where: {
          id: postHasBeenDisliked.id,
        },

        include: {
          postLikedByUsers: true,
        },
      });

      res.json(unLikedPost);
    }
  }),
];

exports.post_comment = [
  asyncHandler(async (req, res, next) => {
    const { id } = req.params;

    const { text } = req.body;

    const postById = await prisma.post.findFirst({
      where: {
        id: Number(id),
      },
    });

    await prisma.comments.create({
      data: {
        text: text,
        commentLeftByUserId: req.authData.id,
        commentRelatedToPostId: postById.id,
      },

      include: {
        commentLeftByUser: true,
      },
    });

    await prisma.post.update({
      where: {
        id: postById.id,
      },

      data: {
        comments: {
          increment: 1,
        },
      },
    });

    const postWithAComment = await prisma.post.findFirst({
      where: {
        id: Number(postById.id),
      },

      include: {
        postLikedByUsers: true,
        postCommentedByUsers: {
          include: {
            commentLeftByUser: true,
          },
        },
      },
    });

    res.json(postWithAComment);
  }),
];

exports.post_comment_reply = [
  asyncHandler(async (req, res, next) => {
    const { id } = req.params;

    const { text, commentId } = req.body;

    const postById = await prisma.post.findFirst({
      where: {
        id: Number(id),
      },
    });

    await prisma.comments.create({
      data: {
        text: text,
        commentLeftByUserId: req.authData.id,
        commentRelatedToPostId: postById.id,
        parentCommentId: Number(commentId),
      },
    });

    await prisma.post.update({
      where: {
        id: postById.id,
      },

      data: {
        comments: {
          increment: 1,
        },
      },
    });

    const postWithACommentReply = await prisma.post.findFirst({
      where: {
        id: postById.id,
      },

      include: {
        postLikedByUsers: true,
        postCommentedByUsers: {
          include: {
            commentLeftByUser: true,
          },
        },
      },
    });

    res.json(postWithACommentReply);
  }),
];

exports.post_delete = [
  asyncHandler(async (req, res, next) => {
    const { id } = req.params;

    const deletePost = await prisma.post.delete({
      where: {
        id: Number(id),
        authorId: req.authData.id,
      },
    });

    const checkIfUserHasPosts = await prisma.user.findFirst({
      where: {
        id: deletePost.authorId,
      },
    });

    if (checkIfUserHasPosts && checkIfUserHasPosts.posts > 0) {
      await prisma.user.update({
        where: {
          id: deletePost.authorId,
        },

        data: {
          posts: {
            decrement: 1,
          },
        },
      });
    } else {
      return;
    }

    res.json({ message: "Post has been deleted!" });
  }),
];
