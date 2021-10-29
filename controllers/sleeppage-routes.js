const withAuth = require("../utils/auth");

const { User, Sleep } = require("../models");

const router = require("express").Router();

// get sleep data
router.get("/", withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
    });

    const sleepData = await Sleep.findAll({
      where: { baby_id: userData.baby_id },
    });

    const babyData = sleepData.map((data) => data.get({ plain: true }));

    res.render("sleep", {
      babyData,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
