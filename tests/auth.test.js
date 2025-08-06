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

    it("should respond with status 400, if the username and display name is taken", async () => {
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

      expect(status).toBe(400);

      expect(header["content-type"]).toMatch(/json/);

      expect(findTheSignUpUser).not.toBeNull();

      const [username, display_name] = body;

      expect(username.msg).toEqual("First name is already taken");

      expect(display_name.msg).toEqual("Display name is already taken");
    });

    it("should respond with status 400, if the password conditions are not met", async () => {
      const { body, header, status } = await request(app).post("/signup").send({
        username: "preslaw1",
        display_name: "preslaw1",
        bio: "",
        website: "",
        github: "",
        password: "12345678",
        confirm_password: "12345678",
      });

      const findTheSignUpUser = await prisma.user.findFirst();

      expect(status).toBe(400);

      expect(header["content-type"]).toMatch(/json/);

      expect(findTheSignUpUser).not.toBeNull();

      const [password] = body;

      expect(status).toBe(400);

      expect(header["content-type"]).toMatch(/json/);

      expect(password.msg).toEqual(
        "Password must be minimum 8 characters, and contain at least one letter, and one number",
      );
    });

    it("should respond with status 400, if the passwords don't match", async () => {
      const { body, header, status } = await request(app).post("/signup").send({
        username: "preslaw2",
        display_name: "preslaw2",
        bio: "",
        website: "",
        github: "",
        password: "12345678A",
        confirm_password: "12345678",
      });

      const findTheSignUpUser = await prisma.user.findFirst();

      expect(status).toBe(400);

      expect(header["content-type"]).toMatch(/json/);

      expect(findTheSignUpUser).not.toBeNull();

      const [password] = body;

      expect(status).toBe(400);

      expect(header["content-type"]).toMatch(/json/);

      expect(password.msg).toEqual("Passwords must match");
    });

    describe("[POST] /login", () => {
      it("should retrieve a token on successful login", async () => {
        const { body, status } = await request(app).post("/login").send({
          username: "preslaw",
          password: "12345678B",
        });

        expect(status).toBe(200);

        expect(body).toHaveProperty("token");

        expect(jwt.verify(body.token, process.env.SECRET) === String);
      });

      it("should respond with 400 if the credentials are wrong", async () => {
        const response = await request(app).post("/login").send({
          username: "preslaww",
          password: "12345678B",
        });

        expect(response.text).toEqual("Unauthorized");

        expect(response.status).toBe(401);
      });
    });
  });
});
