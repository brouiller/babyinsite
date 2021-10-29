const withAuth = require("../utils/auth");

const { Baby, Diaper, User } = require("../models");

const router = require("express").Router();

// get diaper data
router.get("/", withAuth, async (req, res) => {
  try {
      const userData = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ["password"] },
      });
    // returns only diapers now
    const diaperData = await Diaper.findAll({
      where: { baby_id: userData.baby_id },
    });

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
