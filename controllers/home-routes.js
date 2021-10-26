const router = require("express").Router();

// get all posts for homepage
router.get("/", async (req, res) => {
  try {
      res.send("something");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
