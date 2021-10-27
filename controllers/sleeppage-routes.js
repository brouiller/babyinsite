const withAuth = require("../utils/auth");

const { Baby } = require("../models");

const router = require("express").Router();

// get sleep data
router.get("/sleep", withAuth, async (req, res) => {
  try {
    const sleepData = await Baby.findAll({ include: [Sleep] });

    const babyData = sleepData.map((data) => data.get({ plain: true }));

    res.render("home", {
      babyData,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
