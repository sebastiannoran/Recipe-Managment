const { RecipeInventory } = require('./models');
const express = require('express');
const app = express();
const port = 4000;
// const { query } = require('./database');
require("dotenv").config();

// app.use((req, res, next) => {
//     console.log(`Request: ${req.method} ${req.originalUrl}`);
//     res.on("finish", () => {
//       // the 'finish' event will be emitted when the response is handed over to the OS
//       console.log(`Response Status: ${res.statusCode}`);
//     });
//     next();
//   });

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

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });