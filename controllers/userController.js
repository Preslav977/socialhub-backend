const { validationResult } = require("express-validator");

const bcrypt = require("bcryptjs");

const passport = require("passport");

const jwt = require("jsonwebtoken");

const asyncHandler = require("express-async-handler");

const prisma = require("../db/client");

const upload = require("../middlewares/multer");

const uploadingImage = require("../helper/uploadingImage");

const userSignUp = require("../validatingMiddlewares/userSignUp");

const userUpdateProfile = require("../validatingMiddlewares/userUpdateProfile");

exports.user_signup = [
  userSignUp,
  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);

    const { username, display_name, password, confirm_password } = req.body;

    bcrypt.hash(password, 10, async (error, hashedPassword) => {
      if (error) {
        console.error("Failed to hash the password", error);

        throw error;
      }

      if (!errors.isEmpty()) {
        return res.status(400).send(errors.array());
      } else {
        const signupUser = await prisma.user.create({
          data: {
            username: username,
            display_name: display_name,
            bio: "",
            website: "",
            github: "",
            password: hashedPassword,
            confirm_password: hashedPassword,
            profile_picture: "",
            followersNumber: 0,
            followingNumber: 0,
            posts: 0,
          },
        });

        res.json(signupUser);
      }
    });
  }),
];

exports.user_login = [
  passport.authenticate("local", { session: false }),
  asyncHandler(async (req, res, next) => {
    const { id } = req.user;

    jwt.sign({ id }, process.env.SECRET, { expiresIn: "25m" }, (err, token) => {
      res.json({ token });
    });
  }),
];

exports.user_login_guest = [
  passport.authenticate("local", { session: false }),
  asyncHandler(async (req, res, next) => {
    const { role } = req.user;

    jwt.sign(
      { role },
      process.env.SECRET,
      { expiresIn: "25m" },
      (err, token) => {
        if (role !== "GUEST") {
          res.json({ error: "Only guests can login!" });
        } else {
          res.json({ token });
        }
      },
    );
  }),
];

exports.user_get_by_id = [
  asyncHandler(async (req, res, next) => {
    const { id } = req.params;

    const userById = await prisma.user.findFirst({
      where: {
        id: Number(id),
      },
      include: {
        followedBy: true,
        following: true,
        likedPosts: true,
        createdPostsByUser: true,
        commentsOnPosts: true,
      },
    });

    if (!userById) {
      res.json({
        message: "Failed to get user information. Please try to login again!",
      });
    } else {
      res.json(userById);
    }
  }),
];

exports.user_update_profile = [
  upload.single("file"),
  userUpdateProfile,
  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);

    const { id } = req.params;

    const { username, display_name, bio, website, github } = req.body;

    const profile_picture = await uploadingImage(req.file);

    if (!errors.isEmpty()) {
      return res.status(400).send(errors.array());
    } else {
      if (!profile_picture.startsWith("https")) {
        res.json(profile_picture);
      } else {
        const updateUserProfile = await prisma.user.update({
          where: {
            id: Number(id),
          },
          data: {
            username: username,
            display_name: display_name,
            bio: bio,
            website: website,
            github: github,
            profile_picture: profile_picture,
          },
        });

        const updatedUserProfile = await prisma.user.findFirst({
          where: {
            id: Number(updateUserProfile.id),
          },
        });

        res.json(updatedUserProfile);
      }
    }
  }),
];

exports.users_get = [
  asyncHandler(async (req, res, next) => {
    const users = await prisma.user.findMany({
      orderBy: {
        username: "asc",
      },
    });

    if (users.length === 0) {
      res.json({ message: "Users have not been found!" });
    } else {
      res.json(users);
    }
  }),
];

exports.users_search = [
  asyncHandler(async (req, res, next) => {
    const { query } = req.query;

    const searchForAUser =
      await prisma.$queryRaw`SELECT * FROM "user" WHERE username ILIKE CONCAT('%', ${query}, '%') OR display_name ILIKE CONCAT('%', ${query}, '%')`;

    if (searchForAUser.length === 0) {
      res.json({
        message:
          "User has not been found! Try with different username or display name!",
      });
    } else {
      res.json(searchForAUser);
    }
  }),
];

exports.user_followers = [
  asyncHandler(async (req, res, next) => {
    const { id } = req.params;

    const userById = await prisma.user.findFirst({
      where: {
        id: Number(id),
      },
      include: {
        followedBy: true,
      },
    });

    const checkIfUserHasBeenFollowed = userById.followedBy.some(
      (user) => user.id === req.authData.id,
    );

    if (!checkIfUserHasBeenFollowed) {
      const followTheUser = await prisma.user.update({
        where: {
          id: userById.id,
        },

        include: {
          followedBy: true,
        },

        data: {
          followedBy: {
            connect: [{ id: req.authData.id }],
          },

          followersNumber: {
            increment: 1,
          },
        },
      });

      const followedUser = await prisma.user.findFirst({
        where: {
          id: followTheUser.id,
        },

        include: {
          followedBy: true,
        },
      });

      res.json(followedUser);
    } else {
      const unFollowTheUser = await prisma.user.update({
        where: {
          id: userById.id,
        },

        include: {
          followedBy: true,
        },

        data: {
          followedBy: {
            disconnect: [{ id: req.authData.id }],
          },

          followingNumber: {
            decrement: 1,
          },
        },
      });

      const unFollowedUser = await prisma.user.findFirst({
        where: {
          id: unFollowTheUser.id,
        },

        include: {
          followedBy: true,
        },
      });

      res.json(unFollowedUser);
    }
  }),
];

exports.user_following = [
  asyncHandler(async (req, res, next) => {
    const { id } = req.params;

    const followingTheUser = await prisma.user.update({
      where: {
        id: req.authData.id,
      },
      include: {
        following: true,
      },
      data: {
        following: {
          connect: [{ id: Number(id) }],
        },

        followingNumber: {
          increment: 1,
        },
      },
    });

    const followingUser = await prisma.user.findFirst({
      where: {
        id: followingTheUser.id,
      },

      include: {
        following: true,
      },
    });

    res.json(followingUser);
  }),
];
