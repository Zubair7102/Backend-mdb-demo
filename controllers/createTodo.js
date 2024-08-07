// In a MongoDB backend application, especially when using frameworks like Express in a Node.js environment, a controller is a crucial component in the MVC (Model-View-Controller) architecture. The controller acts as an intermediary between the model (which represents the data and business logic) and the view (which represents the UI or the res sent back to the client).


// Detailed Explanation
// Controller:
// A controller handles the incoming HTTP reqs, processes them (often involving interaction with the model), and sends back an appropriate res.
// It defines the logic for the different routes/endpoints of your application.
// In a typical setup, each controller corresponds to a specific resource (e.g., users, products, orders).


// Mapping:
// Controllers are mapped to routes in your application. Each route corresponds to an endpoint that the client can access.
// The mapping is usually done in the main application file (e.g., app.js or server.js), where you define the routes and specify which controller handles each route.



// import the model 
// const { req } = require("express")
const Todo = require("../models/Todo")

// every controller is mapped to a route so if iam here in controller it means any route has been hit

// define route handler

// exports.createTodo: This exports the function createTodo so it can be used in other parts of the application.
exports.createTodo = async(req, res) => {
    try{
        // extraact title and description from req body
        const {title, description} = req.body;
        // req.body: This contains the data sent by the client in the body of the req. This typically happens in a POST req.

        // { title, description }: This uses object destructuring to extract the title and description properties from req.body.
        // create a new Todo Object and insert in Database 


        const response = await Todo.create({title, description});
        // Todo.create({ title, description }): This calls a method create on the Todo model, passing an object with the title and description. This creates a new Todo item in the database with the specified title and description.


        // Your goal here is to send a res back to the client indicating that an entry was created successfully, along with some additional data. 
        res.status(200).json(
            // ets the HTTP status code to 200, which typically indicates a successful req. 
            {
                success:true,
                data:response,
                message:'Entry Created Successfully'
            }
        );
    }
    catch(error) {
        console.error(error);
        console.log(error);
        res.status(500).json(
            // Sets the HTTP status code to 500, which indicates an internal server error.
            {
                success: false,
                data: "internal Server error",
                message: error.message,
            }
        )
    }
}