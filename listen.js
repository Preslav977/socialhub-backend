require("dotenv").config();

const { createServer } = require("http");

const { Server } = require("socket.io");

const app = require("./app");

const httpServer = createServer(app);

const PORT = process.env.PORT || 3000;

const io = new Server(httpServer);

httpServer.listen(PORT, () =>
  console.log(`Express app - listening on port ${PORT}`),
);

module.exports = io;
