const { Diaper } = require("../models");

const diaperData = [
  {
    type: "Wet",
    time: "1633372376",
  },
  {
    type: "Dry",
    time: "1633372376",
  },
  {
    type: "Soiled",
    time: "1633372376",
  },
];

const seedDiaper = () => Diaper.bulkCreate(diaperData);

module.exports = seedDiaper;
