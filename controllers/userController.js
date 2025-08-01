const { validationResult } = require("express-validator");

const bcrypt = require("bcryptjs");

const passport = require("passport");

const jwt = require("jsonwebtoken");

const asyncHandler = require("express-async-handler");

const prisma = require("../db/client");

const userSignUp = require("../validatingMiddlewares/userSignUp");

const { createClient } = require("@supabase/supabase-js");

const supabaseUrl = process.env.supabaseUrl;

const supabaseKey = process.env.supabaseAPI;

const supabase = createClient(supabaseUrl, supabaseKey);

const upload = require("../middlewares/multer");

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
        res.status(400).send(errors.array());
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
            background_picture: "",
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
  // userSignUp,
  upload.single("file"),
  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);

    const { id } = req.params;

    const { username, display_name, bio, website, github } = req.body;

    const profile_picture = req.file;

    const { error } = await supabase.storage
      .from("socialhub-images")
      .upload(
        `public/${profile_picture.originalname}`,
        profile_picture.buffer,
        {
          cacheControl: "3600",
          upsert: true,
          contentType: req.file.mimetype,
        },
      );

    if (error) {
      throw new Error(
        `You can only upload images ${profile_picture.mimetype},`,
      );
    }

    const { data } = supabase.storage
      .from("socialhub-images")
      .getPublicUrl(`public/${profile_picture.originalname}`);

    console.log(data);

    if (!errors.isEmpty()) {
      res.status(400).send(errors.array());
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
          profile_picture: data.publicUrl,
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
