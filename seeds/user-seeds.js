const { User } = require("../models");

const userData = [
  {
    first_name: "Blossoming",
    last_name: "Apricot",
    email: "user@example.com",
    //this decrypts to root1234
    password: "$2b$10$LeR5etAASLdCTiNpdkGUR.OomCM2cQECVtjhAqgM.sN/I4FE4bTdm",
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
