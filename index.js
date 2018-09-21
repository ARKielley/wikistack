"use strict";

const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(router);
app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
