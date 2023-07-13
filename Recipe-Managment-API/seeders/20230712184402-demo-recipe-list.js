'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize)  {
  await queryInterface.bulkInsert ('RecipeInventories', [{ // this is the problem line
    title: "Cake",
    description: "Three-layered choclate frosted cake",
    ingredients: "Flour, eggs, sugar, milk, espresso dust, dark choclate (70%), heavy whipping cream",
    instructions: "first, combine dry and wet ingredients. second, place in over @ 400 degree F. final, bake for 25 mins or until cooked in middle",
    created_at: new Date(),
    updated_at: new Date(),
  }, {
    title: "Oven-roasted chicken",
    description: "Oven roasted chicken with mixed vegatables",
    ingredients: "2 pounds of chicken breast, olive oil, garlic, 1 head of broccoli",
    instructions: "first, preheat oven to 300 F. second, place all ingredients together. finally, place food into oven and cook for 40 mins",
    created_at: new Date(),
    updated_at: new Date(),
  }], {});
},

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('RecipeInventories', null, {});
  }
};
