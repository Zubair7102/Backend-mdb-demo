// IN THIS FILE WE ARE ESTABLISHING A CONNECTION WITH THE DATABASE

const mongoose = require("mongoose");

require("dotenv").config();

// **************************************************
// require("dotenv")
// This part imports the dotenv library, which is a module that loads environment variables from a .env file into the process.env object. The require function is used in Node.js to import modules.

// .config()
// This method (config()) is called on the imported dotenv object. When invoked, it reads the .env file (which should be located in the root directory of your project) and loads the environment variables defined in that file into process.env.


// the below line of code establish a connection between your application and database
const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then( () =>{console.log("DB connection is successfull")})

.catch((error) => {console.log("issue in DB connection")
    console.log(error.message)
    process.exit(1);
    // process.exit(1) is a command in Node.js that immediately stops the Node.js process with an exit status code
    // process.exit is a method provided by Node.js to terminate the current process.
    // It accepts an optional code argument which is a number representing the exit status.
    // 0: Indicates a successful termination. This is the default exit code when the process ends without any errors.
    // Non-zero values (e.g., 1): Indicate that the process ended due to an error or some issue. The specific non-zero value can represent different types of errors depending on the convention used in the application.
})
};

module.exports = dbConnect;
// This line exports the dbConnect function so it can be used in other parts of the application.