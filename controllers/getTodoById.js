const Todo = require("../models/Todo");

exports.getTodoById = async(req, res) => {
    try{
        // extract todo item based on their Ids
        const id = req.params.id;
        const todo = await Todo.findById({ _id: id})

        // condition if data for the given id is not found 
        if(!todo)
            {
                return res.status(404).json({
                    success: false,
                    message: `No data found for the given id: ${id}`,
                })
            } 
            // condition if the data is found for the given id
            res.status(200).json(
                {
                    success: true,
                    data: todo,
                    message: `Todo ${id} data is successfully fetched`,
                }
            )
    }
    catch(err) {
        console.error(err);
        res.status(500)
        .json({
            success: false,
            error: err.message,
            message: "Server Error",
        })
    }
}