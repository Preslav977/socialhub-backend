require("dotenv").config();

const express = require("express");

const path = require("node:path");

const session = require("express-session");

const { PrismaSessionStore } = require("@quixo3/prisma-session-store");

const prisma = require("./db/client");

const passport = require("passport");

const LocalStrategy = require("passport-local").Strategy;

const GitHubStrategy = require("passport-github2").Strategy;

const bcrypt = require("bcryptjs");

const asyncHandler = require("express-async-handler");

const cors = require("cors");

const app = express();

const GITHUB_CLIENT_ID = process.env.CLIENT_ID;

const GITHUB_CLIENT_SECRET = process.env.CLIENT_SECRET;

const compression = require("compression");

app.use(cors());

app.use(
  cors({
    origin: [
      // "https://socialhub-backend-d9kn.onrender.com/",
      // "https://socialhub-frontend-seven.vercel.app",
    ],
  }),
);

app.set("views", path.join(__dirname, "views"));

app.set("view engine", "ejs");

const assetsPath = path.join(__dirname, "/public");

app.use(express.static(assetsPath));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const authRouter = require("./routes/authRouter");

const userRouter = require("./routes/userRouter");

const postRouter = require("./routes/postRouter");

const chatRouter = require("./routes/chatRouter");

const verifyToken = require("./middlewares/verifyToken");

app.use(
  session({
    cookie: {
      maxAge: 7 * 24 * 60 * 60 * 1000,
    },
    secret: process.env.sessionSecret,
    resave: false,
    saveUninitialized: false,
    store: new PrismaSessionStore(prisma, {
      checkPeriod: 2 * 60 * 1000,
      dbRecordIdIsSessionId: true,
      dbRecordIdFunction: undefined,
    }),
  }),
);

app.use(passport.session());

passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const findUserByUsername = await prisma.user.findFirst({
        where: {
          username: username,
        },
      });

      if (!findUserByUsername) {
        return done(null, false, {
          message: "A user with this username doesn't exists!",
        });
      }

      const match = await bcrypt.compare(password, findUserByUsername.password);

      if (!match) {
        return done(null, false, {
          message: "A user with password doesn't exists!",
        });
      }

      return done(null, findUserByUsername);
    } catch (error) {
      return done(error);
    }
  }),
);

passport.use(
  new GitHubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: "http://localhost:5000/auth/github/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      console.log(
        "accessToken",
        accessToken,
        "refreshToken",
        refreshToken,
        "profile",
        profile,
      );
      process.nextTick(function () {
        return done(null, profile);
      });
    },
  ),
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const findUserById = await prisma.user.findFirst({
      where: {
        id: Number(id),
      },
    });
    done(null, findUserById);
  } catch (error) {
    done(error);
  }
});

app.post(
  "users/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
  }),
);

app.get(
  "users/logout",
  asyncHandler(async (req, res, next) => {
    req.logout((err) => {
      if (err) {
        return next(err);
      }

      res.redirect("/login");
    });
  }),
);

app.use(compression());

const RateLimit = require("express-rate-limit");

const limiter = RateLimit({
  windowMs: 1 * 60 * 1000,
  max: 100,
});

// app.use(limiter);

app.use(authRouter);

app.get(
  "/auth/github",
  passport.authenticate("github", { scope: ["user:email"] }),
  function (req, res) {
    console.log("Req", req);
  },
);

app.get(
  "/auth/github/callback",
  passport.authenticate("github", { failureRedirect: "/login" }),
  function (req, res) {
    res.redirect("/login");
  },
);

app.use(verifyToken);

app.use("/users", userRouter);

app.use("/posts", postRouter);

app.use("/chats", chatRouter);

app.use((err, req, res, next) => {
  console.error(err.stack);

  res.status(500).send(err.stack);
});

module.exports = app;
