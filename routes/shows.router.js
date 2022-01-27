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

router.post("/", async (req, res, next) => {
  try {
    const newShow = await Show.create({
      name: req.body.name,
      rating: req.body.rating,
    });
  } catch (err) {
    next(err);
  }
});

router.get("/ratings/:rating/", async (req, res, next) => {
  try {
    const showsByRating = await Show.findShowByRating(req.params.rating);
    res.json(showsByRating);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
