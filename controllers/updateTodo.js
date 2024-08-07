const Todo = require("../models/Todo")

exports.updateTodo = async(req, res) => {
    try{
        const {id} = req.params;
        const {title, description} = req.body;

        // updating the pre created data 
        const todo = await Todo.findByIdAndUpdate(
            {_id: id},
            {title, description, updatedAt: Date.now()},
    )

    res.status(200).json({
        success: true,
        data: todo,
        message: "Updated successfully "
    })
    }
    catch(err)
    {
        console.error(err);
        res.status(500)
        .json({
            success: false,
            error: err.message,
            message: "Server Error"
        })
    }
}