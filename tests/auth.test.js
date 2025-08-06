require("dotenv").config();

const request = require("supertest");

const prisma = require("../db/client");

const authRouter = require("../routes/authRouter");

const jwt = require("jsonwebtoken");

const app = require("../app");

app.use("/", authRouter);

describe("testing auth routers with controllers", (done) => {
  beforeAll(async () => {
    await prisma.$connect();
  });

  afterAll(async () => {
    await prisma.$disconnect();

    await prisma.user.deleteMany();

    done;
  });

  describe("[POST] /signup", () => {
    it("should respond with status 200 when a user sign up", async () => {
      const { body, header, status } = await request(app).post("/signup").send({
        username: "preslaw",
        display_name: "preslaw",
        bio: "",
        website: "",
        github: "",
        password: "12345678B",
        confirm_password: "12345678B",
      });

      const findTheSignUpUser = await prisma.user.findFirst();

      expect(status).toBe(200);

      expect(header["content-type"]).toMatch(/json/);

      expect(findTheSignUpUser).not.toBeNull();

      expect(body.username).toEqual("preslaw");

      expect(body.display_name).toEqual("preslaw");

      expect(body.bio).toEqual("");

      expect(body.website).toEqual("");

      expect(body.github).toEqual("");

      expect(body.password).toEqual(body.password);

      expect(body.confirm_password).toEqual(body.confirm_password);
    });
  });
});
