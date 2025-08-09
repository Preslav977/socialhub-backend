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
    it("should respond with status 200 when creating a post with text", async () => {
      const signUpUser = await request(app).post("/signup").send({
        username: "preslaw5",
        display_name: "preslaw5",
        bio: "",
        website: "",
        github: "",
        password: "12345678B",
        confirm_password: "12345678B",
      });

      const loginUser = await request(app).post("/login").send({
        username: "preslaw5",
        password: "12345678B",
      });

      const { token } = loginUser.body;

      const { body, status, header } = await request(app)
        .post("/posts")
        .send({
          post_content: "test",
          post_tag: "tag",
          post_authorId: signUpUser.body.id,
        })

        .set("Authorization", `Bearer ${token}`);

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

    it("should respond with status 200 when creating a post with image", async () => {
      const signUpUser = await request(app).post("/signup").send({
        username: "preslaw6",
        display_name: "preslaw6",
        bio: "",
        website: "",
        github: "",
        password: "12345678B",
        confirm_password: "12345678B",
      });

      const loginUser = await request(app).post("/login").send({
        username: "preslaw6",
        password: "12345678B",
      });

      const { token } = loginUser.body;

      const { body, status, header } = await request(app)
        .post("/posts/with-image")

        .set("Authorization", `Bearer ${token}`)

        .field("post_content", "testing")

        .attach("file", "public/cat.jpg")

        .field("post_tag", "tag")

        .field("post_authorId", signUpUser.body.id);

      expect(body.post_content).toEqual("testing");

      expect(body.post_imageURL).toEqual(body.post_imageURL);

      expect(body.post_tag).toEqual("tag");

      expect(body.post_likes).toEqual(0);

      expect(body.post_comments).toEqual(0);

      expect(body.createdAt).toEqual(body.createdAt);

      expect(body.post_authorId).toEqual(body.post_authorId);

      expect(status).toBe(200);

      expect(header["content-type"]).toMatch(/json/);
    });

    it("should respond with message if the image is bigger than 5MB", async () => {
      const signUpUser = await request(app).post("/signup").send({
        username: "preslaw7",
        display_name: "preslaw7",
        bio: "",
        website: "",
        github: "",
        password: "12345678B",
        confirm_password: "12345678B",
      });

      const loginUser = await request(app).post("/login").send({
        username: "preslaw7",
        password: "12345678B",
      });

      const { token } = loginUser.body;

      const { body, status, header } = await request(app)
        .post("/posts/with-image")

        .set("Authorization", `Bearer ${token}`)

        .field("post_content", "testing")

        .attach("file", "public/7mb.jpg")

        .field("post_tag", "tag")

        .field("post_authorId", signUpUser.body.id);

      expect(body).toEqual(
        "Image uploading failed: The object exceeded the maximum allowed size",
      );

      expect(status).toBe(200);

      expect(header["content-type"]).toMatch(/json/);
    });

    it("should respond with message if the uploaded file is not a image", async () => {
      const signUpUser = await request(app).post("/signup").send({
        username: "preslaw8",
        display_name: "preslaw8",
        bio: "",
        website: "",
        github: "",
        password: "12345678B",
        confirm_password: "12345678B",
      });

      const loginUser = await request(app).post("/login").send({
        username: "preslaw8",
        password: "12345678B",
      });

      const { token } = loginUser.body;

      const { body, status, header } = await request(app)
        .post("/posts/with-image")

        .set("Authorization", `Bearer ${token}`)

        .field("post_content", "testing")

        .attach("file", "public/document.txt")

        .field("post_tag", "tag")

        .field("post_authorId", signUpUser.body.id);

      createdPostId = body.id;

      expect(body).toEqual(
        "Image uploading failed: mime type text/plain is not supported",
      );

      expect(status).toBe(200);

      expect(header["content-type"]).toMatch(/json/);
    });

    describe("[GET] /posts", () => {
      it("should respond with status 200 when getting all posts", async () => {
        const signUpUser = await request(app).post("/signup").send({
          username: "preslaw9",
          display_name: "preslaw9",
          bio: "",
          website: "",
          github: "",
          password: "12345678B",
          confirm_password: "12345678B",
        });

        const loginUser = await request(app).post("/login").send({
          username: "preslaw9",
          password: "12345678B",
        });

        const { token } = loginUser.body;

        await request(app)
          .post("/posts")
          .send({
            post_content: "test",
            post_tag: "tag",
            post_authorId: signUpUser.body.id,
          })

          .set("Authorization", `Bearer ${token}`);

        const { body, status, header } = await request(app)
          .get("/posts/")
          .set("Authorization", `Bearer ${token}`);

        body.forEach((post) => {
          expect(post.content_type).toEqual(post.content_type);

          expect(post.content_imageURL).toEqual(post.content_imageURL);

          expect(post.tag).toEqual(post.tag);

          expect(post.post_likes).toEqual(post.post_likes);

          expect(post.post_comments).toEqual(post.post_comments);

          expect(post.post_authorId).toEqual(post.post_authorId);
        });

        expect(status).toBe(200);

        expect(header["content-type"]).toMatch(/json/);
      });

      it("should respond with status 200 if post has been found by ID", async () => {
        const signUpUser = await request(app).post("/signup").send({
          username: "preslaw10",
          display_name: "preslaw10",
          bio: "",
          website: "",
          github: "",
          password: "12345678B",
          confirm_password: "12345678B",
        });

        const loginUser = await request(app).post("/login").send({
          username: "preslaw10",
          password: "12345678B",
        });

        const { token } = loginUser.body;

        const createdPost = await request(app)
          .post("/posts")
          .send({
            post_content: "test",
            post_tag: "tag",
            post_authorId: signUpUser.body.id,
          })
          .set("Authorization", `Bearer ${token}`);

        const { id } = createdPost.body;

        const { body, status, header } = await request(app)
          .get(`/posts/${id}`)
          .set("Authorization", `Bearer ${token}`);

        expect(body.post_content).toEqual("test");

        expect(body.post_imageURL).toEqual(null);

        expect(body.post_tag).toEqual("tag");

        expect(body.post_likes).toEqual(0);

        expect(body.post_comments).toEqual(0);

        expect(body.createdAt).toEqual(body.createdAt);

        expect(body.post_authorId).toEqual(body.post_authorId);

        expect(body.post_author.username).toEqual("preslaw10");

        expect(body.post_author.display_name).toEqual("preslaw10");

        expect(body.post_author.bio).toEqual("");

        expect(body.post_author.website).toEqual("");

        expect(body.post_author.github).toEqual("");

        expect(body.post_author.password).toEqual(body.post_author.password);

        expect(body.post_author.confirm_password).toEqual(
          body.post_author.confirm_password,
        );

        expect(body.post_author.profile_picture).toEqual("");

        expect(body.post_author.role).toEqual("USER");

        expect(status).toBe(200);

        expect(header["content-type"]).toMatch(/json/);
      });
    });

    describe("[PUT] /posts", () => {
      it("should respond with status 200, and user to a like the posts", async () => {
        const signUpUser = await request(app).post("/signup").send({
          username: "preslaw11",
          display_name: "preslaw11",
          bio: "",
          website: "",
          github: "",
          password: "12345678B",
          confirm_password: "12345678B",
        });

        const loginUser = await request(app).post("/login").send({
          username: "preslaw11",
          password: "12345678B",
        });

        const { token } = loginUser.body;

        const createdPost = await request(app)
          .post("/posts")
          .send({
            post_content: "test",
            post_tag: "tag",
            post_authorId: signUpUser.body.id,
          })
          .set("Authorization", `Bearer ${token}`);

        const { id } = createdPost.body;

        const { body, status, header } = await request(app)
          .put(`/posts/like/${id}`)
          .set("Authorization", `Bearer ${token}`)
          .send({
            id: id,
          });

        expect(body.post_content).toEqual("test");

        expect(body.post_imageURL).toEqual(null);

        expect(body.post_tag).toEqual("tag");

        expect(body.post_likes).toEqual(1);

        expect(body.post_authorId).toEqual(body.post_authorId);

        expect(body.likedPostByUsers[0].username).toEqual("preslaw11");

        expect(body.likedPostByUsers[0].display_name).toEqual("preslaw11");

        expect(body.likedPostByUsers[0].bio).toEqual("");

        expect(body.likedPostByUsers[0].website).toEqual("");

        expect(body.likedPostByUsers[0].github).toEqual("");

        expect(body.likedPostByUsers[0].password).toEqual(
          body.likedPostByUsers[0].password,
        );

        expect(body.likedPostByUsers[0].confirm_password).toEqual(
          body.likedPostByUsers[0].confirm_password,
        );

        expect(body.likedPostByUsers[0].profile_picture).toEqual("");

        expect(body.likedPostByUsers[0].role).toEqual("USER");

        expect(status).toBe(200);

        expect(header["content-type"]).toMatch(/json/);
      });

      it("should respond with status 200 when commenting on a post", async () => {
        const signUpUser = await request(app).post("/signup").send({
          username: "preslaw12",
          display_name: "preslaw12",
          bio: "",
          website: "",
          github: "",
          password: "12345678B",
          confirm_password: "12345678B",
        });

        const loginUser = await request(app).post("/login").send({
          username: "preslaw12",
          password: "12345678B",
        });

        const { token } = loginUser.body;

        const createdPost = await request(app)
          .post("/posts")
          .send({
            post_content: "test",
            post_tag: "tag",
            post_authorId: signUpUser.body.id,
          })
          .set("Authorization", `Bearer ${token}`);

        const { id } = createdPost.body;

        const { body, status, header } = await request(app)
          .post(`/posts/${id}/comment`)
          .set("Authorization", `Bearer ${token}`)
          .send({
            comment_text: "hello",
            commented_postId: id,
          });

        expect(body.post_content).toEqual("test");

        expect(body.post_imageURL).toEqual(null);

        expect(body.post_tag).toEqual("tag");

        expect(body.post_likes).toEqual(0);

        expect(body.post_comments).toEqual(1);

        expect(body.post_authorId).toEqual(body.post_authorId);

        expect(body.post_commentsByUsers[0].comment_text).toEqual("hello");

        expect(body.post_commentsByUsers[0].comment_userId).toEqual(
          body.post_commentsByUsers[0].comment_userId,
        );

        expect(body.post_commentsByUsers[0].commented_postId).toEqual(
          body.post_commentsByUsers[0].commented_postId,
        );

        expect(body.post_commentsByUsers[0].parentCommentId).toEqual(
          body.post_commentsByUsers[0].parentCommentId,
        );

        expect(body.post_commentsByUsers[0].comments_user.username).toEqual(
          "preslaw12",
        );

        expect(body.post_commentsByUsers[0].comments_user.display_name).toEqual(
          "preslaw12",
        );

        expect(body.post_commentsByUsers[0].comments_user.bio).toEqual("");

        expect(body.post_commentsByUsers[0].comments_user.website).toEqual("");

        expect(body.post_commentsByUsers[0].comments_user.github).toEqual("");

        expect(body.post_commentsByUsers[0].comments_user.password).toEqual(
          body.post_commentsByUsers[0].comments_user.password,
        );

        expect(
          body.post_commentsByUsers[0].comments_user.confirm_password,
        ).toEqual(body.post_commentsByUsers[0].comments_user.confirm_password);

        expect(
          body.post_commentsByUsers[0].comments_user.profile_picture,
        ).toEqual("");

        expect(body.post_commentsByUsers[0].comments_user.role).toEqual("USER");

        expect(status).toBe(200);

        expect(header["content-type"]).toMatch(/json/);
      });
    });
  });
});
