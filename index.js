const express = require("express");
const app = express();

// load the config from the .env file
require("dotenv").config();

const PORT = process.env.PORT || 4000;
// either the port will be loaded from the PORT variable from config file and for some case if it does not load then use port 4000 by default

// middleware to parse json request body 
app.use(express.json());

// import routes for Todo API
const todoRoutes = require("./routes/todos");
// his imports the routes defined in the todo module located in the routes directory.

// mount the todo API routes
app.use("/api/v1", todoRoutes);
// his mounts the todoRoutes onto the /api/v1 path. This means that any routes defined in the todoRoutes module will be prefixed with /api/v1. For example, if todoRoutes defines a route for creating a Todo at /createTodo, it will be accessible at /api/v1/createTodo in your application.


// start the server 
app.listen(PORT, () => {
    console.log(`Server started successfully at ${PORT}`);
})


// connecting to the database
const dbConnect = require("./config/database");
dbConnect();


// default Route 
app.get("/", (request, response) => {
    response.send(`<h1>This is HOMEPAGE Baby</h1>`);
});
// app.get: This method is used to define a route that responds to HTTP GET requests.
// "/": The path for this route. In this case, it's the root path of the application, meaning this route will handle requests made to the homepage
// request: This parameter contains information about the incoming request, such as request headers, query parameters, and the request body.
// response: This parameter is used to send a response back to the client.