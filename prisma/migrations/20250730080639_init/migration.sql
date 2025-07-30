/*
  Warnings:

  - You are about to drop the column `postId` on the `comments` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[username]` on the table `user` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[display_name]` on the table `user` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `commented_postId` to the `comments` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."comments" DROP CONSTRAINT "comments_postId_fkey";

-- DropForeignKey
ALTER TABLE "public"."user" DROP CONSTRAINT "user_commentId_fkey";

-- DropForeignKey
ALTER TABLE "public"."user" DROP CONSTRAINT "user_followersId_fkey";

-- DropForeignKey
ALTER TABLE "public"."user" DROP CONSTRAINT "user_followingId_fkey";

-- DropForeignKey
ALTER TABLE "public"."user" DROP CONSTRAINT "user_likedPostByUserId_fkey";

-- AlterTable
ALTER TABLE "public"."comments" DROP COLUMN "postId",
ADD COLUMN     "commented_postId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "public"."user" ALTER COLUMN "followersId" DROP NOT NULL,
ALTER COLUMN "followingId" DROP NOT NULL,
ALTER COLUMN "likedPostByUserId" DROP NOT NULL,
ALTER COLUMN "commentId" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "user_username_key" ON "public"."user"("username");

-- CreateIndex
CREATE UNIQUE INDEX "user_display_name_key" ON "public"."user"("display_name");

-- AddForeignKey
ALTER TABLE "public"."user" ADD CONSTRAINT "user_followersId_fkey" FOREIGN KEY ("followersId") REFERENCES "public"."followers"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."user" ADD CONSTRAINT "user_followingId_fkey" FOREIGN KEY ("followingId") REFERENCES "public"."following"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."user" ADD CONSTRAINT "user_likedPostByUserId_fkey" FOREIGN KEY ("likedPostByUserId") REFERENCES "public"."post"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."user" ADD CONSTRAINT "user_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "public"."comments"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."comments" ADD CONSTRAINT "comments_commented_postId_fkey" FOREIGN KEY ("commented_postId") REFERENCES "public"."post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
