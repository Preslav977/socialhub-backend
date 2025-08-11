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
          content: "test",
          tag: "tag",
          authorId: signUpUser.body.id,
        })

        .set("Authorization", `Bearer ${token}`);

      expect(body.content).toEqual("test");

      expect(body.imageURL).toEqual(null);

      expect(body.tag).toEqual("tag");

      expect(body.likes).toEqual(0);

      expect(body.comments).toEqual(0);

      expect(body.createdAt).toEqual(body.createdAt);

      expect(body.authorId).toEqual(body.authorId);

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

        .field("content", "testing")

        .attach("file", "public/cat.jpg")

        .field("tag", "tag")

        .field("authorId", signUpUser.body.id);

      expect(body.content).toEqual("testing");

      expect(body.imageURL).toEqual(body.imageURL);

      expect(body.tag).toEqual("tag");

      expect(body.likes).toEqual(0);

      expect(body.comments).toEqual(0);

      expect(body.createdAt).toEqual(body.createdAt);

      expect(body.authorId).toEqual(body.authorId);

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

        .field("content", "testing")

        .attach("file", "public/7mb.jpg")

        .field("tag", "tag")

        .field("authorId", signUpUser.body.id);

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

        .field("content", "testing")

        .attach("file", "public/document.txt")

        .field("tag", "tag")

        .field("authorId", signUpUser.body.id);

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
            content: "test",
            tag: "tag",
            authorId: signUpUser.body.id,
          })

          .set("Authorization", `Bearer ${token}`);

        const { body, status, header } = await request(app)
          .get("/posts/")
          .set("Authorization", `Bearer ${token}`);

        body.forEach((post) => {
          expect(post.content_type).toEqual(post.content_type);

          expect(post.content_imageURL).toEqual(post.content_imageURL);

          expect(post.tag).toEqual(post.tag);

          expect(post.likes).toEqual(post.likes);

          expect(post.comments).toEqual(post.comments);

          expect(post.authorId).toEqual(post.authorId);
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
            content: "test",
            tag: "tag",
            authorId: signUpUser.body.id,
          })
          .set("Authorization", `Bearer ${token}`);

        const { id } = createdPost.body;

        const { body, status, header } = await request(app)
          .get(`/posts/${id}`)
          .set("Authorization", `Bearer ${token}`);

        expect(body.content).toEqual("test");

        expect(body.imageURL).toEqual(null);

        expect(body.tag).toEqual("tag");

        expect(body.likes).toEqual(0);

        expect(body.comments).toEqual(0);

        expect(body.createdAt).toEqual(body.createdAt);

        expect(body.authorId).toEqual(body.authorId);

        expect(body.author.username).toEqual("preslaw10");

        expect(body.author.display_name).toEqual("preslaw10");

        expect(body.author.bio).toEqual("");

        expect(body.author.website).toEqual("");

        expect(body.author.github).toEqual("");

        expect(body.author.password).toEqual(body.author.password);

        expect(body.author.confirm_password).toEqual(
          body.author.confirm_password,
        );

        expect(body.author.profile_picture).toEqual("");

        expect(body.author.role).toEqual("USER");

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
            content: "test",
            tag: "tag",
            authorId: signUpUser.body.id,
          })
          .set("Authorization", `Bearer ${token}`);

        const { id } = createdPost.body;

        const { body, status, header } = await request(app)
          .put(`/posts/like/${id}`)
          .set("Authorization", `Bearer ${token}`)
          .send({
            id: id,
          });

        expect(body.content).toEqual("test");

        expect(body.imageURL).toEqual(null);

        expect(body.tag).toEqual("tag");

        expect(body.likes).toEqual(1);

        expect(body.authorId).toEqual(body.authorId);

        expect(body.postLikedByUsers[0].username).toEqual("preslaw11");

        expect(body.postLikedByUsers[0].display_name).toEqual("preslaw11");

        expect(body.postLikedByUsers[0].bio).toEqual("");

        expect(body.postLikedByUsers[0].website).toEqual("");

        expect(body.postLikedByUsers[0].github).toEqual("");

        expect(body.postLikedByUsers[0].password).toEqual(
          body.postLikedByUsers[0].password,
        );

        expect(body.postLikedByUsers[0].confirm_password).toEqual(
          body.postLikedByUsers[0].confirm_password,
        );

        expect(body.postLikedByUsers[0].profile_picture).toEqual("");

        expect(body.postLikedByUsers[0].role).toEqual("USER");

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
            content: "test",
            tag: "tag",
            authorId: signUpUser.body.id,
          })
          .set("Authorization", `Bearer ${token}`);

        const { id } = createdPost.body;

        const { body, status, header } = await request(app)
          .post(`/posts/${id}/comment`)
          .set("Authorization", `Bearer ${token}`)
          .send({
            text: "hello",
            commented_postId: id,
          });

        expect(body.content).toEqual("test");

        expect(body.imageURL).toEqual(null);

        expect(body.tag).toEqual("tag");

        expect(body.likes).toEqual(0);

        expect(body.comments).toEqual(1);

        expect(body.authorId).toEqual(body.authorId);

        expect(body.postCommentedByUsers[0].text).toEqual("hello");

        expect(body.postCommentedByUsers[0].userId).toEqual(
          body.postCommentedByUsers[0].userId,
        );

        expect(body.postCommentedByUsers[0].commentRelatedToPostId).toEqual(
          body.postCommentedByUsers[0].commentRelatedToPostId,
        );

        expect(body.postCommentedByUsers[0].parentCommentId).toEqual(
          body.postCommentedByUsers[0].parentCommentId,
        );

        expect(body.postCommentedByUsers[0].commentLeftByUser.username).toEqual(
          "preslaw12",
        );

        expect(
          body.postCommentedByUsers[0].commentLeftByUser.display_name,
        ).toEqual("preslaw12");

        expect(body.postCommentedByUsers[0].commentLeftByUser.bio).toEqual("");

        expect(body.postCommentedByUsers[0].commentLeftByUser.website).toEqual(
          "",
        );

        expect(body.postCommentedByUsers[0].commentLeftByUser.github).toEqual(
          "",
        );

        expect(body.postCommentedByUsers[0].commentLeftByUser.password).toEqual(
          body.postCommentedByUsers[0].commentLeftByUser.password,
        );

        expect(
          body.postCommentedByUsers[0].commentLeftByUser.confirm_password,
        ).toEqual(
          body.postCommentedByUsers[0].commentLeftByUser.confirm_password,
        );

        expect(
          body.postCommentedByUsers[0].commentLeftByUser.profile_picture,
        ).toEqual("");

        expect(body.postCommentedByUsers[0].commentLeftByUser.role).toEqual(
          "USER",
        );

        expect(status).toBe(200);

        expect(header["content-type"]).toMatch(/json/);
      });

      it("should respond with status 200, when leaving a comment with a reply", async () => {
        const signUpUser = await request(app).post("/signup").send({
          username: "preslaw13",
          display_name: "preslaw13",
          bio: "",
          website: "",
          github: "",
          password: "12345678B",
          confirm_password: "12345678B",
        });

        const loginUser = await request(app).post("/login").send({
          username: "preslaw13",
          password: "12345678B",
        });

        const { token } = loginUser.body;

        const createdPost = await request(app)
          .post("/posts")
          .send({
            content: "test",
            tag: "tag",
            authorId: signUpUser.body.id,
          })
          .set("Authorization", `Bearer ${token}`);

        const { id } = createdPost.body;

        const creatingAComment = await request(app)
          .post(`/posts/${id}/comment`)
          .set("Authorization", `Bearer ${token}`)
          .send({
            text: "hello",
            commentRelatedToPostId: id,
          });

        const { body, status, header } = await request(app)
          .post(`/posts/${id}/comment/${creatingAComment.body.id}`)
          .set("Authorization", `Bearer ${token}`)
          .send({
            text: "hello again",
            commentRelatedToPostId: id,
            commentId: creatingAComment.body.postCommentedByUsers[0].id,
          });

        expect(body.content).toEqual("test");

        expect(body.imageURL).toEqual(null);

        expect(body.tag).toEqual("tag");

        expect(body.likes).toEqual(0);

        expect(body.comments).toEqual(2);

        expect(body.authorId).toEqual(body.authorId);

        expect(body.postCommentedByUsers[0].text).toEqual("hello");

        expect(body.postCommentedByUsers[0].userId).toEqual(
          body.postCommentedByUsers[0].userId,
        );

        expect(body.postCommentedByUsers[0].commentRelatedToPostId).toEqual(
          body.postCommentedByUsers[0].commentRelatedToPostId,
        );

        expect(body.postCommentedByUsers[0].parentCommentId).toEqual(
          body.postCommentedByUsers[0].parentCommentId,
        );

        expect(body.postCommentedByUsers[0].commentLeftByUser.username).toEqual(
          "preslaw13",
        );

        expect(
          body.postCommentedByUsers[0].commentLeftByUser.display_name,
        ).toEqual("preslaw13");

        expect(body.postCommentedByUsers[0].commentLeftByUser.bio).toEqual("");

        expect(body.postCommentedByUsers[0].commentLeftByUser.website).toEqual(
          "",
        );

        expect(body.postCommentedByUsers[0].commentLeftByUser.github).toEqual(
          "",
        );

        expect(body.postCommentedByUsers[0].commentLeftByUser.password).toEqual(
          body.postCommentedByUsers[0].commentLeftByUser.password,
        );

        expect(
          body.postCommentedByUsers[0].commentLeftByUser.confirm_password,
        ).toEqual(
          body.postCommentedByUsers[0].commentLeftByUser.confirm_password,
        );

        expect(
          body.postCommentedByUsers[0].commentLeftByUser.profile_picture,
        ).toEqual("");

        expect(body.postCommentedByUsers[0].commentLeftByUser.role).toEqual(
          "USER",
        );

        expect(body.postCommentedByUsers[1].text).toEqual("hello again");

        expect(body.postCommentedByUsers[1].userId).toEqual(
          body.postCommentedByUsers[1].userId,
        );

        expect(body.postCommentedByUsers[1].commented_postId).toEqual(
          body.postCommentedByUsers[1].commented_postId,
        );

        expect(body.postCommentedByUsers[1].parentCommentId).toEqual(
          body.postCommentedByUsers[1].parentCommentId,
        );

        expect(body.postCommentedByUsers[1].commentLeftByUser.username).toEqual(
          "preslaw13",
        );

        expect(
          body.postCommentedByUsers[1].commentLeftByUser.display_name,
        ).toEqual("preslaw13");

        expect(body.postCommentedByUsers[1].commentLeftByUser.bio).toEqual("");

        expect(body.postCommentedByUsers[1].commentLeftByUser.website).toEqual(
          "",
        );

        expect(body.postCommentedByUsers[1].commentLeftByUser.github).toEqual(
          "",
        );

        expect(body.postCommentedByUsers[1].commentLeftByUser.password).toEqual(
          body.postCommentedByUsers[1].commentLeftByUser.password,
        );

        expect(
          body.postCommentedByUsers[1].commentLeftByUser.confirm_password,
        ).toEqual(
          body.postCommentedByUsers[1].commentLeftByUser.confirm_password,
        );

        expect(
          body.postCommentedByUsers[1].commentLeftByUser.profile_picture,
        ).toEqual("");

        expect(body.postCommentedByUsers[1].commentLeftByUser.role).toEqual(
          "USER",
        );

        expect(status).toBe(200);

        expect(header["content-type"]).toMatch(/json/);
      });
    });

    describe("[DELETE] /posts", () => {
      it("should respond with 200, and delete the post", async () => {
        const signUpUser = await request(app).post("/signup").send({
          username: "preslaw14",
          display_name: "preslaw14",
          bio: "",
          website: "",
          github: "",
          password: "12345678B",
          confirm_password: "12345678B",
        });

        const loginUser = await request(app).post("/login").send({
          username: "preslaw14",
          password: "12345678B",
        });

        const { token } = loginUser.body;

        const createdPost = await request(app)
          .post("/posts")
          .send({
            content: "test",
            tag: "tag",
            authorId: signUpUser.body.id,
          })
          .set("Authorization", `Bearer ${token}`);

        const { id } = createdPost.body;

        const { body, status, header } = await request(app)
          .delete(`/posts/${id}`)
          .set("Authorization", `Bearer ${token}`);

        expect(body.message).toEqual("Post has been deleted!");

        expect(status).toBe(200);

        expect(header["content-type"]).toMatch(/json/);
      });
    });
  });
});
