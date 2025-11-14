const { Server } = require("socket.io");

let io;

const initSocket = (server) => {
  io = new Server(server, {
    cors: {
      origin: "http://localhost:5173",
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket) => {
    console.log("a user connected");

    socket.on("disconnect", () => {
      console.log("user disconnected");
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

const socketJoinChatRoom = (payload) => {
  io.on("connection", (socket) => {
    socket.join(payload);
  });

  return "User connects to room " + payload;
};

const socketEmitChatRoomMessage = (roomID, event, payload) => {
  io.to(roomID).emit(event, payload);
};

module.exports = {
  initSocket,
  getIO,
  socketEmit,
  socketJoinChatRoom,
  socketEmitChatRoomMessage,
};
