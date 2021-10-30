const withAuth = require("../utils/auth");

const { Diaper, User } = require("../models");

const router = require("express").Router();

const { Op } = require("sequelize");

// get diaper data
router.get("/", withAuth, async (req, res) => {
  const compareTime = Date.now() / 1000 - 604801;
  const compareTimeInt = parseInt(compareTime);
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
    });
    // returns only diapers now
    const diaperData = await Diaper.findAll({
      where: {
        baby_id: {
          [Op.eq]: userData.baby_id,
        },
        time: {
          [Op.gt]: compareTimeInt,
        },
      },
    });

    const babyData = diaperData.map((data) => data.get({ plain: true }));

    let sunday = 0;
    let monday = 0;
    let tuesday = 0;
    let wednesday = 0;
    let thursday = 0;
    let friday = 0;
    let saturday = 0;

    for (var i = 0; i < babyData.length; i++) {
      var keyTime = babyData[i].time;
      var days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      var dayNum = new Date(keyTime * 1000).getDay();
      var result = days[dayNum];
      switch (result) {
        case "Sunday":
          sunday += 1;
          break;
        case "Monday":
          monday += 1;
          break;
        case "Tuesday":
          tuesday += 1;
          break;
        case "Wednesday":
          wednesday += 1;
          break;
        case "Thursday":
          thursday += 1;
          break;
        case "Friday":
          friday += 1;
          break;
        case "Saturday":
          saturday += 1;
          break;
      }
    }
    var diaperQuantity = [
      { day: "Sunday", quantity: sunday },
      { day: "Monday", quantity: monday },
      { day: "Tuesday", quantity: tuesday },
      { day: "Wednesday", quantity: wednesday },
      { day: "Thursday", quantity: thursday },
      { day: "Friday", quantity: friday },
      { day: "Saturday", quantity: saturday },
    ];

    function sort_days(days) {
      var day_of_week = new Date().getDay();
      var list = days;
      // ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      var sorted_list = list
        .slice(day_of_week)
        .concat(list.slice(0, day_of_week));
      return sorted_list;
    }

    let sortedDiaperQuantity = sort_days(diaperQuantity);

    // This part is weird, works just fine without the average object, but breaks when avg object is unshifted onto the array
    let weeklyAverage =
      (sunday + monday + tuesday + wednesday + thursday + friday + saturday) /
      7;

    sortedDiaperQuantity.unshift({
      day: "Average",
      quantity: weeklyAverage,
    });
    console.log(sortedDiaperQuantity);

    res.render("diaper", {
      sortedDiaperQuantity,
      babyData,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
