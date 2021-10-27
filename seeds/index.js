const sequelize = require("../config/connection");
const seedUser = require("./user-seeds");
const seedBaby = require("./baby-seeds");
const seedDiet = require("./diet-seeds");
const seedDiaper = require("./diaper-seeds");
const seedSleep = require("./sleep-seeds");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();
  await seedBaby();
  await seedDiet();
  await seedDiaper();
  await seedSleep();

  process.exit(0);
};

seedAll();
