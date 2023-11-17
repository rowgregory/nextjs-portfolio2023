/*
  Warnings:

  - The primary key for the `Clicks` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Clicks` table. All the data in the column will be lost.
  - Added the required column `clickType` to the `Clicks` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Clicks" DROP CONSTRAINT "Clicks_pkey",
DROP COLUMN "id",
ADD COLUMN     "clickType" TEXT NOT NULL,
ADD CONSTRAINT "Clicks_pkey" PRIMARY KEY ("clickType");
