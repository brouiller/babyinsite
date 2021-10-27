const { Sleep } = require("../models");

const sleepData = [
  {
    time: "1633372376",
  },
  {
    time: "1633372376",
  },
  {
    time: "1633372376",
  },
  {
    time: "1633372376",
  },
];

const seedSleep = () => Sleep.bulkCreate(sleepData);

module.exports = seedSleep;
