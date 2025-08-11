require("dotenv").config();

const express = require("express");

const path = require("node:path");

const session = require("express-session");

const { PrismaSessionStore } = require("@quixo3/prisma-session-store");

const prisma = require("./db/client");

const passport = require("passport");

const LocalStrategy = require("passport-local").Strategy;

const bcrypt = require("bcryptjs");

const asyncHandler = require("express-async-handler");

const cors = require("cors");

const app = express();

app.use(cors());

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
    resave: true,
    saveUninitialized: true,
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
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
  }),
);

app.get(
  "/logout",
  asyncHandler(async (req, res, next) => {
    req.logout((err) => {
      if (err) {
        return next(err);
      }

      res.redirect("/login");
    });
  }),
);

app.use(authRouter);

app.use(verifyToken);

app.use("/users", userRouter);

app.use("/posts", postRouter);

app.use("/chats", chatRouter);

app.use((err, req, res, next) => {
  console.error(err.stack);

  res.status(500).send(err.stack);
});

module.exports = app;
