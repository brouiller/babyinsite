const { Baby } = require("../models");

const babyData = [
  {
    name: "Superman",
    dob: "1633372376",
  },
];

const seedBaby = () => Baby.bulkCreate(babyData);

module.exports = seedBaby;
