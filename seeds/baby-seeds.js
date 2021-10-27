const { Baby } = require("../models");

const babyData = [
  {
    name: "Superman",
    dob: "2021-02-08 06:42:30",
  },
];

const seedBaby = () => Baby.bulkCreate(babyData);

module.exports = seedBaby;
