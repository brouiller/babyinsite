// import important parts of sequelize library
const { Sequelize, Model, DataTypes } = require("sequelize");
// import our database connection from config.js
const sequelize = require("../config/connection");

// Initialize Diet model (table) by extending off Sequelize's Model class
class Diet extends Model {}

// set up fields and rules for Diet model
Diet.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    food: {
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
    quantity: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        isDecimal: true,
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
    modelName: "diet",
  }
);

module.exports = Diet;
