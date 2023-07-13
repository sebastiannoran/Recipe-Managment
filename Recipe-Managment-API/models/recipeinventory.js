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
      validate: {
        len: {
          args: [3, 255], 
          msg: 'Title must be between 3 and 255 characters long'
        }
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [0, 500], 
          msg: 'Description cannot exceed 500 characters'
        }
      }
    },
    ingredients: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [0, 1000], 
          msg: 'Ingredients cannot exceed 1000 characters'
        }
      }
    },
    instructions: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [0, 5000], 
          msg: 'Instructions cannot exceed 5000 characters'
        }
      }
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'RecipeInventory',
    tableName: `RecipeInventories`,
    underscored: true
  });
  return RecipeInventory;
};