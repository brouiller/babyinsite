const withAuth = require("../utils/auth");
const { User, Baby, Diet, Diaper, Sleep } = require("../models");
const router = require("express").Router();
const { Op } = require("sequelize");

//makes multiple calls for most recent information concerning diapers, diet, and sleep
router.get("/", withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
    });
    const diaperData = await Diaper.findAll({
      limit: 1,
      where: {
        baby_id: {
          [Op.eq]: userData.baby_id,
        },
      },
      order: [["time", "DESC"]],
    });
    const diaperDataRefined = diaperData.map((data) =>
      data.get({ plain: true })
    );
    const dietData = await Diet.findAll({
      limit: 1,
      where: {
        baby_id: {
          [Op.eq]: userData.baby_id,
        },
      },
      order: [["time", "DESC"]],
    });
    const dietDataRefined = dietData.map((data) => data.get({ plain: true }));
    const sleepData = await Sleep.findAll({
      limit: 1,
      where: {
        baby_id: {
          [Op.eq]: userData.baby_id,
        },
      },
      order: [["time", "DESC"]],
    });
    const sleepDataRefined = sleepData.map((data) => data.get({ plain: true }));
    const homeData = await Baby.findAll({
      where: { id: userData.baby_id },
    });
    const babyData = homeData.map((data) => data.get({ plain: true }));
    res.render("home", {
      babyData,
      diaperDataRefined,
      dietDataRefined,
      sleepDataRefined,
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

router.get("/input", withAuth, (req, res) => {
  res.render("input");
});

module.exports = router;
