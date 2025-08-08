const request = require("supertest");

const prisma = require("../db/client");

const userRouter = require("../routes/userRouter");

const app = require("../app");

const { body } = require("express-validator");

app.use("/", userRouter);

describe("testing user routes with controllers", (done) => {
  beforeAll(async () => {
    await prisma.$connect();
  });

  afterAll(async () => {
    await prisma.$disconnect();

    await prisma.user.deleteMany();

    done;
  });

  describe("[GET] /users", () => {
    let userId;

    let getToken;

    beforeEach(async () => {
      const { body } = await request(app).post("/signup").send({
        username: "preslaw",
        display_name: "preslaw",
        bio: "",
        website: "",
        github: "",
        password: "12345678B",
        confirm_password: "12345678B",
      });

      userId = body.id;

      const loginAndGetToken = await request(app).post("/login").send({
        username: "preslaw",
        password: "12345678B",
      });

      const { token } = loginAndGetToken.body;

      getToken = token;
    });

    it("should respond with status 200 and get user details", async () => {
      const { body, status, header } = await request(app)
        .get(`/users/${userId}`)
        .set("Authorization", `Bearer ${getToken}`);

      expect(status).toBe(200);

      expect(header["content-type"]).toMatch(/json/);

      expect(body.username).toEqual("preslaw");

      expect(body.display_name).toEqual("preslaw");

      expect(body.bio).toEqual("");

      expect(body.website).toEqual("");

      expect(body.github).toEqual("");

      expect(body.password).toEqual(body.password);

      expect(body.confirm_password).toEqual(body.confirm_password);
    });

    it("should get a message if the user is not found by ID", async () => {
      const { body, status, header } = await request(app)
        .get("/users/1")
        .set("Authorization", `Bearer ${getToken}`);

      expect(body.message).toEqual(
        "Failed to get user information. Please try to login again.",
      );

      expect(status).toBe(200);

      expect(header["content-type"]).toMatch(/json/);
    });
  });
});
