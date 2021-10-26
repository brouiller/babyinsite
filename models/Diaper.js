// import important parts of sequelize library
const { Sequelize, Model, DataTypes } = require("sequelize");
// import our database connection from config.js
const sequelize = require("../config/connection");

// Initialize Diaper model (table) by extending off Sequelize's Model class
class Diaper extends Model {}

// set up fields and rules for Diaper model
Diaper.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    time: {
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
    modelName: "diaper",
  }
);

module.exports = Diaper;
