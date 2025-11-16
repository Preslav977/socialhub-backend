const { Server } = require("socket.io");
const localhostURL = require("./localhostURL");

let io;

const initSocket = (server) => {
  io = new Server(server, {
    cors: {
      origin: `${localhostURL}`,
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket) => {
    // console.log("a user connected");

    socket.once("join-room", (roomID) => {
      socket.join(roomID);

      // console.log("a user join room", roomID);
    });

    socket.on("disconnect", () => {
      // console.log("a user disconnected");
    });
  });

  return io;
};

const getIO = () => {
  if (!io) {
    throw new Error("Socket.IO not initialized!");
  }

  return io;
};

const socketEmit = (event, payload) => {
  io.emit(event, payload);
};

const socketEmitChatRoomMessage = (roomID, event, payload) => {
  io.to(roomID).emit(event, payload);
};

module.exports = {
  initSocket,
  getIO,
  socketEmit,

  socketEmitChatRoomMessage,
};
