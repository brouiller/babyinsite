const withAuth = require("../utils/auth");
const { User, Sleep, Baby } = require("../models");
const router = require("express").Router();
const { Op } = require("sequelize");

// get sleep data from database
router.get("/", withAuth, async (req, res) => {
  let date = new Date(Date.now());

  let dateString = `${date.getFullYear()}-${
    date.getMonth() + 1
  }-${date.getDate()}T00:00:00`;

  let dateStringUnix = Date.parse(dateString) / 1000;

  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
    });

    const sleepData = await Sleep.findAll({
      where: {
        baby_id: {
          [Op.eq]: userData.baby_id,
        },
        time: {
          [Op.between]: [dateStringUnix - 86400, dateStringUnix],
        },
      },
      order: [["time", "ASC"]],
    });

    const babyData = sleepData.map((data) => data.get({ plain: true }));
    //calculates time awake and asleep for the previous 24 hour period starting at midnight yesterday
    let awakeTime = 0;
    if (babyData.length % 2 !== 0) {
      babyData.pop();
    }
    for (let i = 0; i < babyData.length; i += 2) {
      awakeTime += babyData[i + 1].time - babyData[i].time;
    }
    awakeTime = parseFloat(awakeTime / 3600).toFixed(2);
    let asleepTime = parseFloat(24 - awakeTime);
    let awakeAsleep = [];
    if (asleepTime === 24) {
      awakeAsleep = [{ false: false }, { false: false }];
    } else {
      awakeAsleep = [{ time: awakeTime }, { time: asleepTime }];
    }
    res.render("sleep", {
      babyData,
      awakeAsleep,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
