const withAuth = require("../utils/auth");

const { Baby } = require("../models");

const router = require("express").Router();

// get all relation related to baby
router.get("/", async (req, res) => {
  try {
    const homeData = await Baby.findAll({ include: { all: true } });
    const babyData = homeData.map((data) => data.get({ plain: true }));

    res.json(babyData);
    // res.render("home", {
    //   babyData,
    //   logged_in: req.session.logged_in,
    // });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
