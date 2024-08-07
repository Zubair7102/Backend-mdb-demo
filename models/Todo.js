const mongoose = require("mongoose");


// a schema defines the structure of documents within a collection. 
// When using Mongoose, you can define a schema to specify the structure of documents, enforce validation, and add methods to interact with the data.
const todoSchema = new mongoose.Schema(
    // Schema is a Mongoose constructor used to define the structure of documents.
    {
        title:{
            type:String,
            required:true,
            maxLength:50,
        },

        description: {
            type:String,
            required: true,
            maxLength:50,
        },
        createdAt:{
            type:Date,
            required: true,
            default: Date.now(),
        },
        updatedAt:{
            type:Date,
            required: true,
            default: Date.now(),
        }
}
);

module.exports = mongoose.model("Todo", todoSchema)