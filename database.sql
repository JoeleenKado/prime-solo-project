
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!

CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "art" (
"id" SERIAL PRIMARY KEY,
"user_id" INT NOT NULL REFERENCES "user",
"title" VARCHAR(30) NOT NULL,
"medium" VARCHAR(30),
"dimension" VARCHAR(30),
"url" VARCHAR(200),
"statement" VARCHAR(300)
);

--CREATE
INSERT INTO "art" ("user_id", "title", "medium", "dimension", "url", "statement")
VALUES ('11', 'gallery', 'Acrylic on Canvas', '8X12', '/images/gallery.png', 'A painting of the Mississippi');

INSERT INTO "art" ("user_id", "title", "medium", "dimension", "url", "statement")
VALUES ('3', 'blue art', 'Acrylic on Canvas', '8X10', 'art.com', 'A painting of the me');

--READ
SELECT * FROM "art";

--UPDATE
UPDATE "art"
SET "title" = 'newtitle', "medium" = 'newmedium', "dimension" = '2X2', "url" = 'newurl', "statement" = 'newstatement'
WHERE "id" = '1';

--DELETE
DELETE FROM "art" WHERE id=9
RETURNING "title";
