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
    let signUpUserOneId;

    let signUpUserOneToken;

    let signUpUserTwoId;

    let signUpUserTwoToken;

    beforeEach(async () => {
      const signUpUserOne = await request(app).post("/signup").send({
        username: "preslaw3",
        display_name: "preslaw3",
        bio: "",
        website: "",
        github: "",
        password: "12345678B",
        confirm_password: "12345678B",
      });

      signUpUserOneId = signUpUserOne.body.id;

      const loginSignUpUserOne = await request(app).post("/login").send({
        username: "preslaw3",
        password: "12345678B",
      });

      const tokenSignUpUserOne = loginSignUpUserOne.body.token;

      signUpUserOneToken = tokenSignUpUserOne;

      const signUpUserTwo = await request(app).post("/signup").send({
        username: "preslaw4",
        display_name: "preslaw4",
        bio: "",
        website: "",
        github: "",
        password: "12345678B",
        confirm_password: "12345678B",
      });

      signUpUserTwoId = signUpUserTwo.body.id;

      const loginSignUpUserTwo = await request(app).post("/login").send({
        username: "preslaw4",
        password: "12345678B",
      });

      const tokenSignUpUserTwo = loginSignUpUserTwo.body.token;

      signUpUserTwoToken = tokenSignUpUserTwo;
    });

    afterEach(async () => {
      await prisma.user.deleteMany();
    });

    it("should respond with status 200 and get user details", async () => {
      const { body, status, header } = await request(app)
        .get(`/users/${signUpUserOneId}`)
        .set("Authorization", `Bearer ${signUpUserOneToken}`);

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
        .set("Authorization", `Bearer ${signUpUserOneToken}`);

      expect(body.message).toEqual(
        "Failed to get user information. Please try to login again!",
      );

      expect(status).toBe(200);

      expect(header["content-type"]).toMatch(/json/);
    });

    it("should respond with status 200, and get all users", async () => {
      const { body, status, header } = await request(app)
        .get("/users")
        .set("Authorization", `Bearer ${signUpUserOneToken}`);

      expect(body).not.toBe(null);

      expect(status).toBe(200);

      expect(header["content-type"]).toMatch(/json/);
    });

    it("should respond with status 200, search for user", async () => {
      const { body, status, header } = await request(app)
        .get("/users/search?query=preslaw")
        .set("Authorization", `Bearer ${signUpUserOneToken}`);

      const [user] = body;

      expect(status).toBe(200);

      expect(header["content-type"]).toMatch(/json/);

      expect(user.username).toEqual("preslaw3");

      expect(user.display_name).toEqual("preslaw3");

      expect(user.bio).toEqual("");

      expect(user.website).toEqual("");

      expect(user.github).toEqual("");

      expect(user.profile_picture).toEqual(user.profile_picture);

      expect(user.password).toEqual(user.password);

      expect(user.confirm_password).toEqual(user.confirm_password);

      expect(status).toBe(200);

      expect(header["content-type"]).toMatch(/json/);
    });

    it("should respond with status 200, if user has not been found", async () => {
      const { body, status, header } = await request(app)
        .get("/users/search?query=t")
        .set("Authorization", `Bearer ${signUpUserOneToken}`);

      expect(body.message).toEqual(
        "User has not been found! Try with different username or display name!",
      );

      expect(status).toBe(200);

      expect(header["content-type"]).toMatch(/json/);
    });

    describe("[PUT] /users", () => {
      it("should respond with status 200 when updating the user profile", async () => {
        const { body, status, header } = await request(app)
          .put(`/users/${signUpUserOneId}`)

          .set("Authorization", `Bearer ${signUpUserOneToken}`)

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
          .put(`/users/${signUpUserOneId}`)

          .set("Authorization", `Bearer ${signUpUserOneToken}`)

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
          .put(`/users/${signUpUserOneId}`)

          .set("Authorization", `Bearer ${signUpUserOneToken}`)

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
          .put(`/users/${signUpUserOneId}`)

          .set("Authorization", `Bearer ${signUpUserOneToken}`)

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
          .put(`/users/${signUpUserOneId}`)

          .set("Authorization", `Bearer ${signUpUserOneToken}`)

          .field("username", "preslaw-edited")

          .field("display_name", "preslaw-edited")

          .field("bio", "1")

          .field("website", "2")

          .field("github", "3")

          .field("password", "12345678BA")

          .field("confirm_password", "12345678BA")

          .attach("file", "public/document.txt");

        expect(body).toEqual(
          "Image uploading failed: mime type text/plain is not supported",
        );

        expect(status).toBe(200);

        expect(header["content-type"]).toMatch(/json/);
      });

      it("should respond with 200, if the user gets followed by another user", async () => {
        const { body, status, header } = await request(app)
          .put(`/users/followers/${signUpUserTwoId}`)
          .set("Authorization", `Bearer ${signUpUserOneToken}`);

        expect(status).toBe(200);

        expect(header["content-type"]).toMatch(/json/);

        expect(body.username).toEqual("preslaw4");

        expect(body.display_name).toEqual("preslaw4");

        expect(body.bio).toEqual("");

        expect(body.website).toEqual("");

        expect(body.github).toEqual("");

        expect(body.password).toEqual(body.password);

        expect(body.confirm_password).toEqual(body.confirm_password);

        expect(body.followedBy[0].username).toEqual("preslaw3");

        expect(body.followedBy[0].display_name).toEqual("preslaw3");

        expect(body.followedBy[0].bio).toEqual("");

        expect(body.followedBy[0].website).toEqual("");

        expect(body.followedBy[0].github).toEqual("");

        expect(body.followedBy[0].password).toEqual(
          body.followedBy[0].password,
        );

        expect(body.followedBy[0].confirm_password).toEqual(
          body.followedBy[0].confirm_password,
        );
      });

      it("should respond with 200, if the user is following another user", async () => {
        const { body, status, header } = await request(app)
          .put(`/users/following/${signUpUserTwoId}`)
          .set("Authorization", `Bearer ${signUpUserOneToken}`);

        expect(status).toBe(200);

        expect(header["content-type"]).toMatch(/json/);

        expect(body.username).toEqual("preslaw3");

        expect(body.display_name).toEqual("preslaw3");

        expect(body.bio).toEqual("");

        expect(body.website).toEqual("");

        expect(body.github).toEqual("");

        expect(body.password).toEqual(body.password);

        expect(body.confirm_password).toEqual(body.confirm_password);

        expect(body.following[0].username).toEqual("preslaw4");

        expect(body.following[0].display_name).toEqual("preslaw4");

        expect(body.following[0].bio).toEqual("");

        expect(body.following[0].website).toEqual("");

        expect(body.following[0].github).toEqual("");

        expect(body.following[0].password).toEqual(body.following[0].password);

        expect(body.following[0].confirm_password).toEqual(
          body.following[0].confirm_password,
        );
      });
    });
  });
});
