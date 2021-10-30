const withAuth = require("../utils/auth");

const { User, Diet } = require("../models");

const router = require("express").Router();

const { Op } = require("sequelize");

// get diet data
router.get("/", withAuth, async (req, res) => {
  const compareTime = Date.now() / 1000 - 604801;
  const compareTimeInt = parseInt(compareTime);
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
    });

    const dietData = await Diet.findAll({
      where: {
        baby_id: {
          [Op.eq]: userData.baby_id,
        },
        time: {
          [Op.gt]: compareTimeInt,
        },
        food: {
          [Op.eq]: "bottle",
        },
      },
    });

    const recentMealData = await Diet.findAll({
      where: {
        baby_id: {
          [Op.eq]: userData.baby_id,
        },
        time: {
          [Op.gt]: compareTimeInt,
        },
      },
    });

    // 604801 = one week

    const babyData = dietData.map((data) => data.get({ plain: true }));
    const recentMeals = recentMealData.map((data) => data.get({ plain: true }));

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
          sunday += parseInt(babyData[i].quantity);
          break;
        case "Monday":
          monday += parseInt(babyData[i].quantity);
          break;
        case "Tuesday":
          tuesday += parseInt(babyData[i].quantity);
          break;
        case "Wednesday":
          wednesday += parseInt(babyData[i].quantity);
          break;
        case "Thursday":
          thursday += parseInt(babyData[i].quantity);
          break;
        case "Friday":
          friday += parseInt(babyData[i].quantity);
          break;
        case "Saturday":
          saturday += parseInt(babyData[i].quantity);
          break;
      }
    }
    var foodQuantity = [
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
    let sortedFoodQuantity = sort_days(foodQuantity);

    res.render("diet", {
      sortedFoodQuantity,
      recentMeals,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
