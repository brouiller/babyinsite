const { Sleep } = require("../models");

const sleepData = [
  {
    time: "1633372376",
    baby_id: 1,
  },
  {
    time: "1633372376",
    baby_id: 1,
  },
  {
    time: "1633372376",
    baby_id: 1,
  },
  {
    time: "1633372376",
    baby_id: 1,
  },
];

const seedSleep = () => Sleep.bulkCreate(sleepData);

module.exports = seedSleep;
