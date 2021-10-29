const withAuth = require("../utils/auth");

const { Baby, Diaper } = require("../models");

const router = require("express").Router();

// get diaper data
router.get("/", withAuth, async (req, res) => {
  try {
    // returns only diapers now
    const diaperData = await Diaper.findAll();

    const babyData = diaperData.map((data) => data.get({ plain: true }));

    res.render("diaper", {
      babyData,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
