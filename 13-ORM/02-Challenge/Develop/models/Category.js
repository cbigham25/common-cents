const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
// extends the Sequelize Model class
class Category extends Model {}

// Initialize the Category model with the defined columns and rules
Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;

