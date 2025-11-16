require("dotenv").config();

const { initSocket } = require("./utility/socket");

const { createServer } = require("node:http");

const app = require("./app");

const httpServer = createServer(app);

initSocket(httpServer);

const PORT = process.env.PORT || 3000;

httpServer.listen(PORT, () =>
  console.log(`Express app - listening on port ${PORT}`),
);

module.exports = httpServer;
