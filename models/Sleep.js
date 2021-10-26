// import important parts of sequelize library
const { Sequelize, Model, DataTypes } = require("sequelize");
// import our database connection from config.js
const sequelize = require("../config/connection");

// Initialize Sleep model (table) by extending off Sequelize's Model class
class Sleep extends Model {}

// set up fields and rules for Sleep model
Sleep.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    start: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        isDate: true,
      },
    },
    stop: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        isDate: true,
      },
    },
    baby_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "baby",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "sleep",
  }
);

module.exports = Sleep;
