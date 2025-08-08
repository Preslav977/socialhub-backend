const request = require("supertest");

const prisma = require("../db/client");

const app = require("../app");

const postRouter = require("../routes/postRouter");

app.use("/", postRouter);

describe("testing post routes and controllers", (done) => {
  beforeAll(async () => {
    await prisma.$connect();
  });

  afterAll(async () => {
    await prisma.$disconnect();

    await prisma.user.deleteMany();

    await prisma.post.deleteMany();

    done;
  });

  describe("[POST], /posts", () => {
    let signUpUserId;

    let getToken;

    let createdPostId;

    beforeEach(async () => {
      const signUpUser = await request(app).post("/signup").send({
        username: "preslaw5",
        display_name: "preslaw5",
        bio: "",
        website: "",
        github: "",
        password: "12345678B",
        confirm_password: "12345678B",
      });

      signUpUserId = signUpUser.body.id;

      const loginUser = await request(app).post("/login").send({
        username: "preslaw5",
        password: "12345678B",
      });

      const { token } = loginUser.body;

      getToken = token;
    });

    it("should respond with status 200 when creating a post with text", async () => {
      const { body, status, header } = await request(app)
        .post("/posts")
        .send({
          post_content: "test",
          post_tag: "tag",
          post_authorId: signUpUserId,
        })

        .set("Authorization", `Bearer ${getToken}`);

      createdPostId = body.id;

      expect(body.post_content).toEqual("test");

      expect(body.post_imageURL).toEqual(null);

      expect(body.post_tag).toEqual("tag");

      expect(body.post_likes).toEqual(0);

      expect(body.post_comments).toEqual(0);

      expect(body.createdAt).toEqual(body.createdAt);

      expect(body.post_authorId).toEqual(body.post_authorId);

      expect(status).toBe(200);

      expect(header["content-type"]).toMatch(/json/);
    });
  });
});
