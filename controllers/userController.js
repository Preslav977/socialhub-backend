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

    const getUserById = await prisma.user.findFirst({
      where: {
        id: Number(id),
      },
      include: {
        followedBy: true,
        following: true,
        likedPost: true,
        createdPosts: true,
        commentsOnPost: true,
      },
    });

    if (!getUserById) {
      res.json({
        message: "Failed to get user information. Please try to login again.",
      });
    } else {
      res.json(getUserById);
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

      const fetchTheUpdatedUserProfile = await prisma.user.findFirst({
        where: {
          id: Number(updateUserProfile.id),
        },
      });

      res.json(fetchTheUpdatedUserProfile);
    }
  }),
];

exports.users_get = [
  asyncHandler(async (req, res, next) => {
    const getUsers = await prisma.user.findMany({
      orderBy: {
        username: "asc",
      },
    });

    res.json(getUsers);
  }),
];

exports.users_search = [
  asyncHandler(async (req, res, next) => {
    const { query } = req.query;

    const searchForAUser =
      await prisma.$queryRaw`SELECT * FROM "user" WHERE username ILIKE CONCAT('%', ${query}, '%') OR display_name ILIKE CONCAT('%', ${query}, '%')`;

    res.json(searchForAUser);
  }),
];

exports.user_followers = [
  asyncHandler(async (req, res, next) => {
    const { id } = req.params;

    const getUserById = await prisma.user.findFirst({
      where: {
        id: Number(id),
      },
      include: {
        followedBy: true,
      },
    });

    const checkIfUserHasBeenFollowed = getUserById.followedBy.some(
      (user) => user.id === req.authData.id,
    );

    if (!checkIfUserHasBeenFollowed) {
      const followTheUser = await prisma.user.update({
        where: {
          id: getUserById.id,
        },

        include: {
          followedBy: true,
        },

        data: {
          followedBy: {
            connect: [{ id: req.authData.id }],
          },
        },
      });

      const fetchTheFollowedUser = await prisma.user.findFirst({
        where: {
          id: followTheUser.id,
        },

        include: {
          followedBy: true,
        },
      });

      res.json(fetchTheFollowedUser);
    } else {
      const unFollowTheUser = await prisma.user.update({
        where: {
          id: getUserById.id,
        },

        include: {
          followedBy: true,
        },

        data: {
          followedBy: {
            disconnect: [{ id: req.authData.id }],
          },
        },
      });

      const fetchTheUnFollowedUser = await prisma.user.findFirst({
        where: {
          id: unFollowTheUser.id,
        },

        include: {
          followedBy: true,
        },
      });

      res.json(fetchTheUnFollowedUser);
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
      },
    });

    const fetchTheFollowingUser = await prisma.user.findFirst({
      where: {
        id: followingTheUser.id,
      },

      include: {
        following: true,
      },
    });

    res.json(fetchTheFollowingUser);
  }),
];
