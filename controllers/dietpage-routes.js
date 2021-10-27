const withAuth = require("../utils/auth");

const { Baby } = require("../models");

const router = require("express").Router();

// get diet data
router.get("/diet", withAuth, async (req, res) => {
  try {
    const dietData = await Baby.findAll({ include: [Diet] });

    const babyData = dietData.map((data) => data.get({ plain: true }));

    res.render("home", {
      babyData,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
