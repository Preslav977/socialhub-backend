const request = require("supertest");

const prisma = require("../db/client");

const app = require("../app");

const chatRouter = require("../routes/chatRouter");

app.use("/", chatRouter);

describe("testing chat routes and controllers", (done) => {
  beforeAll(async () => {
    await prisma.$connect();
  });

  afterAll(async () => {
    await prisma.$disconnect();

    await prisma.user.deleteMany();

    await prisma.chat.deleteMany();

    await prisma.messages.deleteMany();

    done;
  });

  describe("[POST] /chats", () => {
    it("should respond with status 200 when creating a chat", async () => {
      const signUpUser = await request(app).post("/signup").send({
        username: "user",
        display_name: "user",
        bio: "",
        website: "",
        github: "",
        password: "12345678B",
        confirm_password: "12345678B",
      });

      const signUpUserTwo = await request(app).post("/signup").send({
        username: "user1",
        display_name: "user1",
        bio: "",
        website: "",
        github: "",
        password: "12345678B",
        confirm_password: "12345678B",
      });

      const loginUser = await request(app).post("/login").send({
        username: "user",
        password: "12345678B",
      });

      const { token } = loginUser.body;

      const { body, status, header } = await request(app)
        .post("/chats")
        .send({
          senderId: signUpUser.body.id,
          receiverId: signUpUserTwo.body.id,
        })

        .set("Authorization", `Bearer ${token}`);

      const { senderChat } = body;

      const { receiverChat } = body;

      expect(body.senderChatId).toEqual(senderChat.id);

      expect(body.receiverChatId).toEqual(receiverChat.id);

      expect(senderChat.username).toEqual("user");

      expect(senderChat.display_name).toEqual("user");

      expect(senderChat.bio).toEqual("");

      expect(senderChat.website).toEqual("");

      expect(senderChat.github).toEqual("");

      expect(senderChat.password).toEqual(senderChat.password);

      expect(senderChat.confirm_password).toEqual(senderChat.confirm_password);

      expect(senderChat.profile_picture).toEqual("");

      expect(receiverChat.role).toEqual("USER");

      expect(receiverChat.username).toEqual("user1");

      expect(receiverChat.display_name).toEqual("user1");

      expect(receiverChat.bio).toEqual("");

      expect(receiverChat.website).toEqual("");

      expect(receiverChat.github).toEqual("");

      expect(receiverChat.password).toEqual(receiverChat.password);

      expect(receiverChat.confirm_password).toEqual(
        receiverChat.confirm_password,
      );

      expect(receiverChat.profile_picture).toEqual("");

      expect(receiverChat.role).toEqual("USER");

      expect(body.messages).toEqual([]);

      expect(status).toBe(200);

      expect(header["content-type"]).toMatch(/json/);
    });
  });
});
