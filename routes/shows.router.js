const router = require("express").Router();
const { Network, Show } = require("../db");

router.get("/", async (req, res, next) => {
  try {
    const shows = await Show.findAll();
    res.json(shows);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
