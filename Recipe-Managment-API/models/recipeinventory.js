'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RecipeInventory extends Model {
    static associate(models) {
      // define association here
    }
  }
  RecipeInventory.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: DataTypes.STRING,
    ingredients: DataTypes.STRING,
    instructions: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'RecipeInventory',
    tableName: `recipe_inventory`,
    underscored: true
  });
  return RecipeInventory;
};