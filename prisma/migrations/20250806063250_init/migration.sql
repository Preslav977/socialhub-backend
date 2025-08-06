/*
  Warnings:

  - You are about to drop the column `message_imageName` on the `messages` table. All the data in the column will be lost.
  - You are about to drop the column `message_imageSize` on the `messages` table. All the data in the column will be lost.
  - You are about to drop the column `message_imageType` on the `messages` table. All the data in the column will be lost.
  - You are about to drop the column `commentId` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `followingId` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `likedPostByUserId` on the `user` table. All the data in the column will be lost.
  - You are about to drop the `followers` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `following` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `comments_userId` to the `comments` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."chat" DROP CONSTRAINT "chat_receiverChatId_fkey";

-- DropForeignKey
ALTER TABLE "public"."chat" DROP CONSTRAINT "chat_senderChatId_fkey";

-- DropForeignKey
ALTER TABLE "public"."comments" DROP CONSTRAINT "comments_commented_postId_fkey";

-- DropForeignKey
ALTER TABLE "public"."followers" DROP CONSTRAINT "followers_followersUserId_fkey";

-- DropForeignKey
ALTER TABLE "public"."messages" DROP CONSTRAINT "messages_chatId_fkey";

-- DropForeignKey
ALTER TABLE "public"."messages" DROP CONSTRAINT "messages_receiverMessageId_fkey";

-- DropForeignKey
ALTER TABLE "public"."messages" DROP CONSTRAINT "messages_senderMessageId_fkey";

-- DropForeignKey
ALTER TABLE "public"."post" DROP CONSTRAINT "post_post_authorId_fkey";

-- DropForeignKey
ALTER TABLE "public"."user" DROP CONSTRAINT "user_commentId_fkey";

-- DropForeignKey
ALTER TABLE "public"."user" DROP CONSTRAINT "user_followingId_fkey";

-- DropForeignKey
ALTER TABLE "public"."user" DROP CONSTRAINT "user_likedPostByUserId_fkey";

-- AlterTable
ALTER TABLE "public"."comments" ADD COLUMN     "comments_userId" INTEGER NOT NULL,
ADD COLUMN     "parentCommentId" INTEGER,
ALTER COLUMN "commented_postId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "public"."messages" DROP COLUMN "message_imageName",
DROP COLUMN "message_imageSize",
DROP COLUMN "message_imageType",
ALTER COLUMN "message_imageURL" DROP NOT NULL;

-- AlterTable
ALTER TABLE "public"."post" ALTER COLUMN "post_imageURL" DROP NOT NULL;

-- AlterTable
ALTER TABLE "public"."user" DROP COLUMN "commentId",
DROP COLUMN "followingId",
DROP COLUMN "likedPostByUserId";

-- DropTable
DROP TABLE "public"."followers";

-- DropTable
DROP TABLE "public"."following";

-- CreateTable
CREATE TABLE "public"."_UserFollows" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_UserFollows_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "public"."_UserLikedPosts" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_UserLikedPosts_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_UserFollows_B_index" ON "public"."_UserFollows"("B");

-- CreateIndex
CREATE INDEX "_UserLikedPosts_B_index" ON "public"."_UserLikedPosts"("B");

-- AddForeignKey
ALTER TABLE "public"."post" ADD CONSTRAINT "post_post_authorId_fkey" FOREIGN KEY ("post_authorId") REFERENCES "public"."user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."comments" ADD CONSTRAINT "comments_comments_userId_fkey" FOREIGN KEY ("comments_userId") REFERENCES "public"."user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."comments" ADD CONSTRAINT "comments_commented_postId_fkey" FOREIGN KEY ("commented_postId") REFERENCES "public"."post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."comments" ADD CONSTRAINT "comments_parentCommentId_fkey" FOREIGN KEY ("parentCommentId") REFERENCES "public"."comments"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."chat" ADD CONSTRAINT "chat_senderChatId_fkey" FOREIGN KEY ("senderChatId") REFERENCES "public"."user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."chat" ADD CONSTRAINT "chat_receiverChatId_fkey" FOREIGN KEY ("receiverChatId") REFERENCES "public"."user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."messages" ADD CONSTRAINT "messages_senderMessageId_fkey" FOREIGN KEY ("senderMessageId") REFERENCES "public"."user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."messages" ADD CONSTRAINT "messages_receiverMessageId_fkey" FOREIGN KEY ("receiverMessageId") REFERENCES "public"."user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."messages" ADD CONSTRAINT "messages_chatId_fkey" FOREIGN KEY ("chatId") REFERENCES "public"."chat"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_UserFollows" ADD CONSTRAINT "_UserFollows_A_fkey" FOREIGN KEY ("A") REFERENCES "public"."user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_UserFollows" ADD CONSTRAINT "_UserFollows_B_fkey" FOREIGN KEY ("B") REFERENCES "public"."user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_UserLikedPosts" ADD CONSTRAINT "_UserLikedPosts_A_fkey" FOREIGN KEY ("A") REFERENCES "public"."post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_UserLikedPosts" ADD CONSTRAINT "_UserLikedPosts_B_fkey" FOREIGN KEY ("B") REFERENCES "public"."user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
