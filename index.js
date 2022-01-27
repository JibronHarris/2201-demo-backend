const express = require("express");
const app = express();

app.get("/", (req, res, next) => {
  res.send("Home");
});

app.listen(3000, () => {
  console.log("Mixing it up on Port 3000");
});
