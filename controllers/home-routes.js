const withAuth = require("../utils/auth");

const { Baby } = require("../models");

const router = require("express").Router();

// get all relation related to baby
router.get("/", withAuth, async (req, res) => {
  try {
    const homeData = await Baby.findAll({ include: { all: true } });
    const babyData = homeData.map((data) => data.get({ plain: true }));

    // console.log(babyData);

    //res.json(babyData);

    res.render("home", {
      babyData,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

router.get("/signup", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }
  res.render("signup");
});
module.exports = router;
