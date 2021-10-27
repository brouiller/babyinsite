//import models
const Baby = require("./Baby");
const Diaper = require("./Diaper");
const Diet = require("./Diet");
const Sleep = require("./Sleep");
const User = require("./User");

//baby relationships
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

Baby.hasMany(User, {
  foreignKey: "baby_id",
});

//diaper relationships
Diaper.belongsTo(Baby, {
  foreignKey: "baby_id",
});

//diet relationships
Diet.belongsTo(Baby, {
  foreignKey: "baby_id",
});

//sleep relationships
Sleep.belongsTo(Baby, {
  foreignKey: "baby_id",
});

//export the models for use in other files
module.exports = {
  Baby,
  Diet,
  Diaper,
  Sleep,
  User,
};
