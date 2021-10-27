const { Diet } = require("../models");

const dietData = [
  {
    food: "snack",
    time: "1633372376",
    quantity: 5.33,
  },
  {
    food: "canned",
    time: "1633372376",
    quantity: 7.3,
  },
  {
    food: "bottle",
    time: "1633372376",
    quantity: 5.0,
  },
  {
    food: "Nursing",
    time: "1633372376",
    quantity: 1,
  },
];

const seedDiet = () => Diet.bulkCreate(dietData);

module.exports = seedDiet;
