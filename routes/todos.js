// A route is essentially a path defined in your application that can handle HTTP methods like GET, POST, PUT, DELETE, etc.
// Each route is associated with a specific URL and an HTTP method, and it defines what should happen when that URL is accessed with that method.
// each Route is mapped to a controller defining its function to perform when route is accessed so we have to import the controller





// imports the Express library, which is a web application framework for Node.js.
const express = require("express");

const router = express.Router();

// importing the controller 
const {createTodo} = require("../controllers/createTodo");
// const { createTodo } = require("../controllers/createTodo");: This imports the createTodo function from the createTodo module located in the controllers directory. The createTodo function is a controller function responsible for handling the logic for creating a new Todo item.

// defining the API routes
router.post("/createTodo", createTodo)
// router.post("/createTodo", createTodo);: This defines a route that responds to POST requests made to the /createTodo path.
// router.post: This method is used to define a route that handles POST requests.
// "/createTodo": This is the path for the route. When a POST request is made to /createTodo, this route will handle it.
// createTodo: This is the handler function that will be called when a POST request is made to /createTodo. It contains the logic to handle the request, such as extracting data from the request body and interacting with the database to create a new Todo item.

module.exports = router;