"use strict";

const express = require("express");
const app = express();
const morgan = require("morgan");
const html = require("html-template-tag");
const wikiRouter = require("./routes/wiki.js");
const userRouter = require("./routes/user.js");

const { db, Page, User } = require("./models"); // {db} it returns the content inside the object, deconstructing db?

app.use(express.urlencoded({ extended: false }));
app.use("/wiki", wikiRouter);
app.use("/wiki/user", userRouter);
app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));

const PORT = 3000;

const init = async () => {
  await db.sync({ force: true });
  app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
  });
};

db.authenticate().then(() => {
  console.log("connected to the database");
});

init();
