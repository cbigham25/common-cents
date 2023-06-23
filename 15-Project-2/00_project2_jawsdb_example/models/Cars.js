const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Cars extends Model {}

Cars.init(
  {
    car_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    make: {
      type: DataTypes.STRING,
    },
    model: {
      type: DataTypes.STRING,
    },
    yearMade: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    timestamps: true,
    underscored: true,
    freezeTableName: true,
    modelName: "car",
  }
);

module.exports = Cars;
