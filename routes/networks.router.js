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

//this route utilizes Eager loading
router.get("/:network", async (req, res, next) => {
  try {
    const networkShows = await Network.GetNetworkAndShows(req.params.network);
    res.json(networkShows);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
