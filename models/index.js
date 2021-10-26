const Baby = require("./Baby");
const Diaper = require("./Diaper");
const Diet = require("./Diet");
const Sleep = require("./Sleep");
const User = require("./User");

Baby.hasMany(Diaper, {
  foreignKey: "baby_id",
  onDelete: "CASCADE",
});

Baby.hasMany(Diet, {
  foreignKey: "baby_id",
  onDelete: "CASCADE",
});

Baby.hasMany(Sleep, {
  foreignKey: "baby_id",
  onDelete: "CASCADE",
});

// //if baby has multiple users needs hasMany relationship
// Baby.hasMany(User, {
//   foreignKey: "baby_id",
//   onDelete: "CASCADE",
// });

Diaper.belongsTo(Baby, {
  foreignKey: "baby_id",
});

Diet.belongsTo(Baby, {
  foreignKey: "baby_id",
});

Sleep.belongsTo(Baby, {
  foreignKey: "baby_id",
});

Baby.hasMany(User, {
    foreignKey: "baby_id",
});

module.exports = {
  Baby,
  Diet,
  Diaper,
  Sleep,
  User,
};
