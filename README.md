# socialhub-backend

> REST API for a full-stack social media platform — handles auth, posts, real-time messaging, and social graph built with Node, Express, Prisma, and PostgreSQL.

[![GitHub stars](https://img.shields.io/github/stars/Preslav977/socialhub-backend?style=social)](https://github.com/Preslav977/socialhub-backend)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

[![Star History Chart](https://api.star-history.com/svg?repos=Preslav977/socialhub-backend&type=Date)](https://star-history.com/#Preslav977/socialhub-backend&Date)

[Live Site](https://socialhub-frontend-seven.vercel.app/) · [Frontend Repo](https://github.com/Preslav977/socialhub-frontend)

---

## ✨ Features

| Feature             | Description                                                                                |
| ------------------- | ------------------------------------------------------------------------------------------ |
| 🔐 Authentication   | Local login with PassportJS + GitHub OAuth, sessions stored via PrismaSessionStore for 24h |
| 📝 Posts            | Create posts with text and/or image, like/dislike, comment, reply, and like comments       |
| 💬 Messaging        | Create conversations, send text and image messages between users via Socket.io             |
| 👥 Social Graph     | Follow/unfollow users, read following feed, latest users, and most followed users          |
| 🔍 Search           | Search for users by username                                                               |
| 🖼️ Image Upload     | Upload images via Multer + Supabase; URL saved to DB after successful upload               |
| 🧪 Tests            | Unit tests for each controller with happy and bad paths using Jest and Supertest           |
| 🔒 Route Protection | JWT middleware applied globally via `app.use` to protect all authenticated routes          |

---

## 🚀 Quick Start

### Install

```bash
git clone https://github.com/Preslav977/socialhub-backend.git
cd socialhub-backend
npm install
```

### Configure

Create a `.env` file in the root:

```env
DATABASE_URL=
JWT_SECRET=
SESSION_SECRET=
SUPABASE_URL=
SUPABASE_KEY=
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=
CLIENT_URL=
```

### Migrate

```bash
npx prisma migrate dev
```

### Run

```bash
npm run dev
```

> API runs on [http://localhost:3000](http://localhost:3000)

---

## 🏗️ Architecture

```
src/
  routes/        # Express route definitions
  controllers/   # Business logic per resource (user, post, comment, message)
  middleware/    # JWT auth, Multer file handling
  prisma/
    schema.prisma    # Models: User, Post, Comment, Message, Conversation, Session
    migrations/      # Versioned DB changes
  socket/        # Socket.io event handlers for real-time messaging
```

Requests hit Express routes → controllers handle logic → Prisma queries PostgreSQL. Image uploads are temporarily held by Multer, sent to Supabase, and the returned URL is persisted to the DB. Socket.io shares the same JWT auth middleware as HTTP routes.

---

## 🤝 Contributing

1. Reach out to me first
2. Fork → Branch → PR
3. Run `npm test` before submitting

---

## 📄 License

MIT © [Preslav977](https://github.com/Preslav977)
