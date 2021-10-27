const { Diet } = require("../models");

const dietData = [
  {
    food: "snack",
    time: "2016-08-09 04:05:02",
    quantity: 5.33,
  },
  {
    food: "canned",
    time: "2016-08-09 04:05:02",
    quantity: 7.3,
  },
  {
    food: "bottle",
    time: "2016-08-09 04:05:02",
    quantity: 5.0,
  },
  {
    food: "Nursing",
    time: "2016-08-09 04:05:02",
    quantity: 1,
  },
];

const seedDiet = () => Diet.bulkCreate(dietData);

module.exports = seedDiet;
