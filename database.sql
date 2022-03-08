
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!

CREATE TABLE "user" (
    "id" SERIAL UNIQUE PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "art" (
"id" SERIAL PRIMARY KEY,
"user_id" INT NOT NULL REFERENCES "user",
"title" VARCHAR(75) NOT NULL,
"medium" VARCHAR(30),
"size" VARCHAR(20),
"url" VARCHAR(125),
"statement" VARCHAR(300)
"like" INTEGER NOT NULL;
);