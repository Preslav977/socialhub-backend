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
