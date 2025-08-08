const request = require("supertest");

const prisma = require("../db/client");

const userRouter = require("../routes/userRouter");

const app = require("../app");

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
        username: "preslaw3",
        display_name: "preslaw3",
        bio: "",
        website: "",
        github: "",
        password: "12345678B",
        confirm_password: "12345678B",
      });

      // console.log(body);

      userId = body.id;

      const loginAndGetToken = await request(app).post("/login").send({
        username: "preslaw3",
        password: "12345678B",
      });

      const { token } = loginAndGetToken.body;

      getToken = token;
    });

    afterEach(async () => {
      await prisma.user.deleteMany();
    });

    it("should respond with status 200 and get user details", async () => {
      const { body, status, header } = await request(app)
        .get(`/users/${userId}`)
        .set("Authorization", `Bearer ${getToken}`);

      expect(status).toBe(200);

      expect(header["content-type"]).toMatch(/json/);

      expect(body.username).toEqual("preslaw3");

      expect(body.display_name).toEqual("preslaw3");

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

    describe("[PUT] /users", () => {
      it("should respond with status 200 when updating the user profile", async () => {
        const { body, status, header } = await request(app)
          .put(`/users/${userId}`)

          .set("Authorization", `Bearer ${getToken}`)

          .field("username", "preslaw-edited")

          .field("display_name", "preslaw-edited")

          .field("bio", "1")

          .field("website", "2")

          .field("github", "3")

          .field("password", "12345678BA")

          .field("confirm_password", "12345678BA")

          .attach("file", "public/cat.jpg");

        expect(status).toBe(200);

        expect(header["content-type"]).toMatch(/json/);

        expect(body.username).toEqual("preslaw-edited");

        expect(body.display_name).toEqual("preslaw-edited");

        expect(body.bio).toEqual("1");

        expect(body.website).toEqual("2");

        expect(body.github).toEqual("3");

        expect(body.profile_picture).toEqual(body.profile_picture);

        expect(body.password).toEqual(body.password);

        expect(body.confirm_password).toEqual(body.confirm_password);
      });

      it("should respond with status 400 if the username is not 1 characters long", async () => {
        const { body, status, header } = await request(app)
          .put(`/users/${userId}`)

          .set("Authorization", `Bearer ${getToken}`)

          .field("username", "")

          .field("display_name", "preslaw-edited")

          .field("bio", "1")

          .field("website", "2")

          .field("github", "3")

          .field("password", "12345678BA")

          .field("confirm_password", "12345678BA")

          .attach("file", "public/cat.jpg");

        const [error] = body;

        const { msg } = error;

        expect(msg).toEqual("Username must be between 1 and 30 characters");

        expect(status).toBe(400);

        expect(header["content-type"]).toMatch(/json/);
      });

      it("should respond with status 400 if the display name is not 1 characters long", async () => {
        const { body, status, header } = await request(app)
          .put(`/users/${userId}`)

          .set("Authorization", `Bearer ${getToken}`)

          .field("username", "preslaw-edited")

          .field("display_name", "")

          .field("bio", "1")

          .field("website", "2")

          .field("github", "3")

          .field("password", "12345678BA")

          .field("confirm_password", "12345678BA")

          .attach("file", "public/cat.jpg");

        const [error] = body;

        const { msg } = error;

        expect(msg).toEqual("Display name must be between 1 and 30 characters");

        expect(status).toBe(400);

        expect(header["content-type"]).toMatch(/json/);
      });

      it("should respond with error if uploaded image is bigger than 5MB", async () => {
        const { body, status, header } = await request(app)
          .put(`/users/${userId}`)

          .set("Authorization", `Bearer ${getToken}`)

          .field("username", "preslaw-edited")

          .field("display_name", "preslaw-edited")

          .field("bio", "1")

          .field("website", "2")

          .field("github", "3")

          .field("password", "12345678BA")

          .field("confirm_password", "12345678BA")

          .attach("file", "public/7mb.jpg");

        expect(body).toEqual(
          "Image uploading failed: The object exceeded the maximum allowed size",
        );

        expect(status).toBe(200);

        expect(header["content-type"]).toMatch(/json/);
      });

      it("should respond with error if uploaded image is not a image", async () => {
        const { body, status, header } = await request(app)
          .put(`/users/${userId}`)

          .set("Authorization", `Bearer ${getToken}`)

          .field("username", "preslaw-edited")

          .field("display_name", "preslaw-edited")

          .field("bio", "1")

          .field("website", "2")

          .field("github", "3")

          .field("password", "12345678BA")

          .field("confirm_password", "12345678BA")

          .attach("file", "public/document.txt");

        console.log(body);

        expect(body).toEqual(
          "Image uploading failed: mime type text/plain is not supported",
        );

        expect(status).toBe(200);

        expect(header["content-type"]).toMatch(/json/);
      });
    });
  });
});
