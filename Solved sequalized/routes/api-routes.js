// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Grabbing our models folder not a single file
//this imports a folder because it allows us to use db.Todo and allows us to use our CRUD operation
//by importing the whole folder we wont have to import different files that do the same things multiple time
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the todos
  app.get("/api/todos", function(req, res) {
      db.Todo.findAll(). then(function(data){
        res.json(data);
      })
  });

  // POST route for saving a new todo. You can create a todo using the data on req.body
  app.post("/api/todos", function(req, res) {

  });

  // DELETE route for deleting todos. You can access the todo's id in req.params.id
  app.delete("/api/todos/:id", function(req, res) {

  });

  // PUT route for updating todos. The updated todo will be available in req.body
  app.put("/api/todos", function(req, res) {

  });
};
