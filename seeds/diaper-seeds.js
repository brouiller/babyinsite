const { Diaper } = require("../models");

const diaperData = [
  {
    type: "Wet",
    time: "1633372376",
    baby_id: 1,
  },
  {
    type: "Dry",
    time: "1633372376",
    baby_id: 1,
  },
  {
    type: "Soiled",
    time: "1633372376",
    baby_id: 1,
  },
];

const seedDiaper = () => Diaper.bulkCreate(diaperData);

module.exports = seedDiaper;
