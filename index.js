const express = require("express");
const app = express();
const { db } = require("./db");

const networkRouter = require("./routes/networks.router");
const showRouter = require("./routes/shows.router");

app.get("/", (req, res, next) => {
  res.send("Hey we like TV here!");
});

app.use("/networks", networkRouter);
app.use("/shows", showRouter);

const init = async () => {
  await db.sync();
  app.listen(3000, () => {
    console.log("Mixing it up on Port 3000");
  });
};

init();
