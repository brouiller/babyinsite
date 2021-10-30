const withAuth = require("../utils/auth");

const { User, Baby } = require("../models");

const router = require("express").Router();

// get all relation related to baby
router.get("/", withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
    });
    const homeData = await Baby.findAll({
      where: { id: userData.baby_id },
      include: { all: true },
    });
    const babyData = homeData.map((data) => data.get({ plain: true }));
    // console.log(babyData[Diapers][babyData[Diapers].length - 1]);
    let newBabyData = [
      {
        name: babyData[0].name,
        diapers: babyData[0].Diapers[babyData[0].Diapers.length - 1],
        diet: babyData[0].Diets[babyData[0].Diets.length - 1],
        sleep: babyData[0].Sleep[babyData[0].Sleep.length - 1],
      },
    ];

    res.render("home", {
      newBabyData,
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
    res.redirect("/baby");
    return;
  }
  res.render("signup");
});

// get all relation related to baby
router.get("/baby", withAuth, async (req, res) => {
  try {
    const homeData = await Baby.findAll();
    const babyData = homeData.map((data) => data.get({ plain: true }));
    res.render("baby", {
      babyData,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// test input handlebars render input forms
router.get("/input", withAuth, (req, res) => {
  res.render("input");
});
module.exports = router;
