const { RecipeInventory } = require('./models');
const express = require('express');
const app = express();
const port = 4000;
require("dotenv").config();


app.use(express.json());

app.post('./RecipeInventory', async (req, res) => {
    try {
        const newRecipe = await RecipeInventory.create(req.body);
        res.status(201).json(newRecipe);
    }catch (error) {
        console.log(error);
        res.status(500).send({ message: err.message });
    }
})

app.get('/RecipeInventory', async (req, res) => {
    try {
        const allRecipes = await RecipeInventory.findAll();
        res.status(200).json(allRecipes);
    } catch (error) {
        console.log(error);
        res.status(500).send( {message: error.message});
    }
})

app.patch('/RecipeInventory/:id', async (req, res) => {
    const recipeId = parseInt(req.params.id, 10);
  
    try {
      const [numberOfAffectedRows, affectedRows] = await RecipeInventory.update(
        req.body,
        { where: { id: recipeId }, returning: true }
      );
  
      if (numberOfAffectedRows > 0) {
        res.status(200).json(affectedRows[0]);
      } else {
        res.status(404).send({ message: 'Recipe not found' });
      }
    } catch (err) {
      if (err.name === 'SequelizeValidationError') {
        return res.status(422).json({ errors: err.errors.map((e) => e.message) });
      }
      console.error(err);
      res.status(500).send({ message: err.message });
    }
  });

  app.delete('/RecipeInventory/:id', async (req, res) => {
    const recipeId = parseInt(req.params.id, 10);
  
    try {
      const deleteOp = await RecipeInventory.destroy({ where: { id: recipeId } });
  
      if (deleteOp > 0) {
        res.status(200).send({ message: 'Recipe deleted successfully' });
      } else {
        res.status(404).send({ message: 'Recipe not found' });
      }
    } catch (err) {
      console.error(err);
      res.status(500).send({ message: err.message });
    }
  });

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });