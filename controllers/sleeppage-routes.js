const withAuth = require("../utils/auth");

const { User, Sleep } = require("../models");

const router = require("express").Router();

const { Op } = require("sequelize");

// get sleep data

router.get("/", withAuth, async (req, res) => {
  let date = new Date(Date.now());
  // let dateUnix = parseInt(date / 1000);

  let dateString = `${date.getFullYear()}-${
    date.getMonth() + 1
  }-${date.getDate()}T00:00:00`;

  dateStringUnix = Date.parse(dateString) / 1000;

  console.log(dateStringUnix - 86400);

  // const compareTime = Date.now() / 1000;
  // let date = new Date();
  // const yesterday = date.setDate(date.getDate() - 1);
  // const yesterdayUnix = new Date(yesterday).getTime() / 1000;

  // to get the previous day, NOW - time has elasped since now - 24 hours worth of seconds
  // 24 hours + elapsed time
  // date yesterday
  // const compareTimeInt = parseInt(yesterdayUnix);
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
    });

    const babyData = sleepData.map((data) => data.get({ plain: true }));
    console.log(babyData);

    // asleep(1) - awake(0), asleep(3) - awake(2), awake(4)
    // [5,9,12,15,19]
    // 4, 3,

    res.render("sleep", {
      sleepData,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
