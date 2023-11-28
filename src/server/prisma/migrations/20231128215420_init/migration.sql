/*
  Warnings:

  - You are about to drop the column `userId` on the `Plant` table. All the data in the column will be lost.
  - You are about to alter the column `tempmax` on the `Plant` table. The data in that column could be lost. The data in that column will be cast from `String` to `Float`.
  - You are about to alter the column `tempmin` on the `Plant` table. The data in that column could be lost. The data in that column will be cast from `String` to `Float`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Plant" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "latin" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "tempmax" REAL NOT NULL,
    "tempmin" REAL NOT NULL,
    "ideallight" TEXT NOT NULL,
    "toleratedlight" TEXT NOT NULL,
    "watering" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "favorite" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_Plant" ("category", "favorite", "id", "ideallight", "image", "latin", "name", "tempmax", "tempmin", "toleratedlight", "watering") SELECT "category", "favorite", "id", "ideallight", "image", "latin", "name", "tempmax", "tempmin", "toleratedlight", "watering" FROM "Plant";
DROP TABLE "Plant";
ALTER TABLE "new_Plant" RENAME TO "Plant";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
