/*
  Warnings:

  - You are about to drop the column `comment_text` on the `comments` table. All the data in the column will be lost.
  - You are about to drop the column `commented_postId` on the `comments` table. All the data in the column will be lost.
  - You are about to drop the column `comments_userId` on the `comments` table. All the data in the column will be lost.
  - You are about to drop the column `message_imageURL` on the `messages` table. All the data in the column will be lost.
  - You are about to drop the column `message_text` on the `messages` table. All the data in the column will be lost.
  - You are about to drop the column `post_authorId` on the `post` table. All the data in the column will be lost.
  - You are about to drop the column `post_comments` on the `post` table. All the data in the column will be lost.
  - You are about to drop the column `post_content` on the `post` table. All the data in the column will be lost.
  - You are about to drop the column `post_imageURL` on the `post` table. All the data in the column will be lost.
  - You are about to drop the column `post_likes` on the `post` table. All the data in the column will be lost.
  - You are about to drop the column `post_tag` on the `post` table. All the data in the column will be lost.
  - Added the required column `commentLeftByUserId` to the `comments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `text` to the `comments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `text` to the `messages` table without a default value. This is not possible if the table is not empty.
  - Added the required column `authorId` to the `post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `comments` to the `post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `content` to the `post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `likes` to the `post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tag` to the `post` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."comments" DROP CONSTRAINT "comments_commented_postId_fkey";

-- DropForeignKey
ALTER TABLE "public"."comments" DROP CONSTRAINT "comments_comments_userId_fkey";

-- DropForeignKey
ALTER TABLE "public"."post" DROP CONSTRAINT "post_post_authorId_fkey";

-- AlterTable
ALTER TABLE "public"."comments" DROP COLUMN "comment_text",
DROP COLUMN "commented_postId",
DROP COLUMN "comments_userId",
ADD COLUMN     "commentLeftByUserId" INTEGER NOT NULL,
ADD COLUMN     "commentRelatedToPostId" INTEGER,
ADD COLUMN     "text" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "public"."messages" DROP COLUMN "message_imageURL",
DROP COLUMN "message_text",
ADD COLUMN     "imageURL" TEXT,
ADD COLUMN     "text" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "public"."post" DROP COLUMN "post_authorId",
DROP COLUMN "post_comments",
DROP COLUMN "post_content",
DROP COLUMN "post_imageURL",
DROP COLUMN "post_likes",
DROP COLUMN "post_tag",
ADD COLUMN     "authorId" INTEGER NOT NULL,
ADD COLUMN     "comments" INTEGER NOT NULL,
ADD COLUMN     "content" TEXT NOT NULL,
ADD COLUMN     "imageURL" TEXT,
ADD COLUMN     "likes" INTEGER NOT NULL,
ADD COLUMN     "tag" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "public"."user" ADD COLUMN     "posts" INTEGER;

-- AddForeignKey
ALTER TABLE "public"."post" ADD CONSTRAINT "post_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "public"."user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."comments" ADD CONSTRAINT "comments_commentLeftByUserId_fkey" FOREIGN KEY ("commentLeftByUserId") REFERENCES "public"."user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."comments" ADD CONSTRAINT "comments_commentRelatedToPostId_fkey" FOREIGN KEY ("commentRelatedToPostId") REFERENCES "public"."post"("id") ON DELETE CASCADE ON UPDATE CASCADE;
