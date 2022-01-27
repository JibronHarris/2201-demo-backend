const express = require("express");
const app = express();
const { db } = require("./db");

app.get("/", (req, res, next) => {
  res.send("Home");
});

const init = async () => {
  await db.sync();
  app.listen(3000, () => {
    console.log("Mixing it up on Port 3000");
  });
};

init();
