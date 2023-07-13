# Recipe Management

This project is a recipe management system built using Node.js, Express.js, and Sequelize. It allows users to create, retrieve, update, and delete recipes. The system also incorporates server-side data validation using Sequelize's built-in validation methods.

## CRUD Functionality

The system provides the following CRUD (Create, Read, Update, Delete) features:

### Create a Recipe

Endpoint: `POST /RecipeInventory`

This feature allows users to create a new recipe by sending a POST request to the `/RecipeInventory` endpoint. The request body should contain the recipe details, including the title, description, ingredients, and instructions. The system will validate the data and store the new recipe in the database.

### Retrieve Recipes

Endpoint: `GET /RecipeInventory`

This feature allows users to retrieve all recipes by sending a GET request to the `/RecipeInventory` endpoint. The system will fetch all recipes from the database and return them in the response.

### Retrieve a Specific Recipe

Endpoint: `GET /RecipeInventory/:id`

This feature allows users to retrieve a specific recipe by its ID. Users need to send a GET request to the `/RecipeInventory/:id` endpoint, where `:id` represents the ID of the desired recipe. The system will fetch the recipe with the specified ID from the database and return it in the response.

### Update a Recipe

Endpoint: `PATCH /RecipeInventory/:id`

This feature allows users to update an existing recipe by sending a PATCH request to the `/RecipeInventory/:id` endpoint. Users should provide the ID of the recipe they want to update in the URL parameter `:id`, and the request body should contain the updated recipe details. The system will validate the data, update the recipe in the database, and return the updated recipe in the response.

### Delete a Recipe

Endpoint: `DELETE /RecipeInventory/:id`

This feature allows users to delete a recipe by sending a DELETE request to the `/RecipeInventory/:id` endpoint. Users should specify the ID of the recipe they want to delete in the URL parameter `:id`. The system will remove the recipe from the database and return a success message in the response.

## Server-side Data Validation

The system incorporates server-side data validation using Sequelize's built-in validation methods. The following fields are validated:

- **Title:** Required field with a minimum length of 3 characters.
- **Description:** Required field with a maximum length of 500 characters.
- **Ingredients:** Required field with a maximum length of 1000 characters.
- **Instructions:** Required field with a maximum length of 5000 characters.

When creating or updating a recipe, the system will validate these fields based on the specified criteria. If any validation rule fails, Sequelize will return an appropriate error message indicating the specific validation failure.

---

