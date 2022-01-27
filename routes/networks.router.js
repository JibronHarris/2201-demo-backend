const router = require("express").Router();
const { Network, Show } = require("../db");

router.get("/", async (req, res, next) => {
  try {
    const network = await Network.findAll();
    res.json(network);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
