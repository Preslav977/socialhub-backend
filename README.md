# socialhub-backend

# Overview

This is the backend of the social hub that handles all the CRUD operations from the frontend, which is created with the PERN stack (PostgreSQL, Express, React, Node).

# About the project the project

SocialHub is a full-stack social media clone that allows the users to create user profiles, create posts, like posts, comment on posts, like their comments, create replies to the comments, search for users, create conversations, and much more.

# Live Preview

- [View the live site here]()
- [View the front-end API repository here](https://github.com/Preslav977/socialhub-frontend)

# Features

- Live validation
- The user can update the profile
- create post with text / image or both
- like / dislike the post
- comment on the post
- like / dislike the post comment
- reply to the comment
- search for user
- read the following user posts
- read recent posts
- read liked posts
- create conversation with another user
- Send messages like text/images between the users
- follow / unfollow user
- read the latest users
- read the most followed users
- modal that pops up on created post
- guest login
- mobile menu

# Technology Used

- Prisma with PostgreSQL: creating models and relationships between user, post, comments, chat, messages, and session
- PassportJS: checking if the user exists and creating the localStrategy for login with username and password
- Express: provides a robust set of features for web applications.
- Node: that allows the JavaScript to run more modules, packages, etc.
- PrismaSessionStore: creating a session and storing it for 24 hours
- Bcrypt: hashing the passwords for the users
- Supabase: uploading the images to the cloud and deleting them
- JWT: token to authorize the user depending on if he or she is logged in
- Multer: temporarily store the uploaded file until Supabase returns the URL back that would be saved in the database
- Supertest and Jest: creating unit tests for each controller with happy and bad paths

# Lessons Learned

- Learned how to deal with relationships between the different parts of the projects by deciding which part of the relation needs to be one-to-many and vice versa
- Learned that it is better in some cases to include all the relationships in the model so it would be easy to update the state in the front-end
- Learned that it is a good idea to check each time, for example, if there are posts, in order to make it easy in the front end to check it
- Learned how to use Supabase; it is not that hard to create a bucket, upload an image, check if it is uploaded, and then get back the URL and save it in the database.
- Learned that sometimes it is better to perform complex logic in one place, like following a user to update the logged-in user number and also the other user that I am going to follow as well; otherwise, doing that 2 separate times is hard to deal with.
- Learned about the Prisma ORM operators like increment instead of doing it myself
- Learned how to include nested relationships with Prisma
- Learned how to use take in order to get the latest users descending by date and the most followed using the same approach, but this time with calculating the bigger following Number
- Learned that I can use app.use the auth router in order to make the other routes requiring JWT to authenticate and protect them

# Future Improvements

- Would look for an alternative to deal with creating global variables / signing up each user in the test to make it easier for myself
- Would add some way of showing the user that the image is being uploaded
- Would implement the socket.io library
- Would add authentication like GitHub, Google
