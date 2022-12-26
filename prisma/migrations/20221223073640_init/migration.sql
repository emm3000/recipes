-- CreateTable
CREATE TABLE "Recipe" (
    "code" TEXT NOT NULL,
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "time" TEXT NOT NULL,
    "portions" TEXT NOT NULL,
    "latitude" TEXT NOT NULL,
    "longitude" TEXT NOT NULL,
    "urlImage" TEXT NOT NULL
);
