-- CreateTable
CREATE TABLE "Clicks" (
    "id" TEXT NOT NULL,
    "logoClicks" INTEGER,
    "gmailClicks" INTEGER,
    "githubClicks" INTEGER,
    "littlePawsClicks" INTEGER,
    "royalCaribbeanClicks" INTEGER,
    "daniellesDogsClicks" INTEGER,

    CONSTRAINT "Clicks_pkey" PRIMARY KEY ("id")
);
