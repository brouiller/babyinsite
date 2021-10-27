const { Diaper } = require("../models");

const diaperData = [
  {
    type: "Wet",
    time: "2016-08-09 04:05:02",
  },
  {
    type: "Dry",
    time: "2016-08-09 04:05:02",
  },
  {
    type: "Soiled",
    time: "2016-08-09 04:05:02",
  },
];

const seedDiaper = () => Diaper.bulkCreate(diaperData);

module.exports = seedDiaper;
