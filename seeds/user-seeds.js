const { User } = require("../models");

const userData = [
  {
    first_name: "Blossoming",
    last_name: "Apricot",
    email: "user@example.com",
    password: "root1234",
  },
];

const seedUser = User.bulkCreate(userData);

module.exports = seedUser;