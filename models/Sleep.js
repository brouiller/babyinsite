const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Sleep extends Model {}

Sleep.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    time: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "Sleep",
  }
);

module.exports = Sleep;
