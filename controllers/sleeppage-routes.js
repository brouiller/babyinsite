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

  let dateStringUnix = parseInt(Date.parse(dateString) / 1000);
  let dateStringUnix2 = parseInt(dateStringUnix - 86400);

  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
    });

    const sleepData = await Sleep.findAll({
      where: {
        baby_id: {
          [Op.eq]: userData.baby_id,
        },
      },
      order: [["time", "ASC"]],
    });

    const babyData1 = sleepData.map((data) => data.get({ plain: true }));
    console.log(babyData1)
    const bData1 = babyData1.filter((value) => value.time >= dateStringUnix2
    );
    const babyData = bData1.filter((value) => value.time <= dateStringUnix)

    //calculates time awake and asleep for the previous 24 hour period starting at midnight yesterday
    let awakeTime = 0;
    if (babyData.length % 2 !== 0) {
      babyData.pop();
    }
    for (let i = 0; i < babyData.length; i += 2) {
      awakeTime += babyData[i + 1].time - babyData[i].time;
    }
    awakeTime = awakeTime / 3600;
    let asleepTime = parseFloat(24 - awakeTime);
    let awakeAsleep = [];
    // if (asleepTime == 24) {
    //   awakeAsleep = [{ false: false }, { false: false }];
    // } else {

      awakeAsleep = [{ time: awakeTime }, { time: asleepTime }];
    // }
    console.log(awakeAsleep);
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
