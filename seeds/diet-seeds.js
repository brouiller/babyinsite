const { Diet } = require("../models");

const dietData = [
  {
    food: "bottle",
    time: 1635516900,
    quantity: 8,
    baby_id: 1,
  },
  {
    food: "bottle",
    time: 1635532020,
    quantity: 8,
    baby_id: 1,
  },
  {
    food: "bottle",
    time: 1635400020,
    quantity: 8,
    baby_id: 1,
  },
  {
    food: "bottle",
    time: 1635413220,
    quantity: 8,
    baby_id: 1,
  },
  {
    food: "bottle",
    time: 1635431820,
    quantity: 8,
    baby_id: 1,
  },
  {
    food: "bottle",
    time: 1635443280,
    quantity: 8,
    baby_id: 1,
  },
  {
    food: "bottle",
    time: 1635486840,
    quantity: 8,
    baby_id: 1,
  },
  {
    food: "bottle",
    time: 1635500460,
    quantity: 8,
    baby_id: 1,
  },
  {
    food: "bottle",
    time: 1635253200,
    quantity: 8,
    baby_id: 1,
  },
  {
    food: "bottle",
    time: 1635273900,
    quantity: 8,
    baby_id: 1,
  },
  {
    food: "bottle",
    time: 1635315600,
    quantity: 8,
    baby_id: 1,
  },
  {
    food: "bottle",
    time: 1635327000,
    quantity: 6,
    baby_id: 1,
  },
  {
    food: "bottle",
    time: 1635345240,
    quantity: 8,
    baby_id: 1,
  },
  {
    food: "bottle",
    time: 1635358800,
    quantity: 8,
    baby_id: 1,
  },
  {
    food: "bottle",
    time: 1635140340,
    quantity: 8,
    baby_id: 1,
  },
  {
    food: "bottle",
    time: 1635153240,
    quantity: 8,
    baby_id: 1,
  },
  {
    food: "bottle",
    time: 1635169440,
    quantity: 8,
    baby_id: 1,
  },
  {
    food: "bottle",
    time: 1635188100,
    quantity: 8,
    baby_id: 1,
  },
  {
    food: "bottle",
    time: 1635232980,
    quantity: 8,
    baby_id: 1,
  },
  {
    food: "bottle",
    time: 1635242940,
    quantity: 8,
    baby_id: 1,
  },
  {
    food: "bottle",
    time: 1635572820,
    quantity: 8,
    baby_id: 1,
  },
  {
    food: "bottle",
    time: 1635590820,
    quantity: 7,
    baby_id: 1,
  },
  {
    food: "bottle",
    time: 1635604200,
    quantity: 8,
    baby_id: 1,
  },
  {
    food: "bottle",
    time: 1635617820,
    quantity: 7,
    baby_id: 1,
  },
  {
    food: "bottle",
    time: 1635659100,
    quantity: 8,
    baby_id: 1,
  },
  {
    food: "bottle",
    time: 1635672540,
    quantity: 8,
    baby_id: 1,
  },
];

const seedDiet = () => Diet.bulkCreate(dietData);

module.exports = seedDiet;
