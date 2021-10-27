const withAuth = require("../utils/auth");

const { Baby } = require("../models");

const router = require("express").Router();

// get diaper data
router.get("/diaper", withAuth, async (req, res) => {
  try {
    const diaperData = await Baby.findAll({ include: [Diaper] });

    const babyData = diaperData.map((data) => data.get({ plain: true }));

    res.render("home", {
      babyData,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
