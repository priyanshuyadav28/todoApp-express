
const Todo = require("../models/Todos");

exports.getTodo = async (req, res) => {
    try{
        const allTodos = await Todo.find({});

        res.status(200).json({
            success: true, 
            data: allTodos, 
            message: "All todos fetched successfully"
        })
    }
    catch(error) {
        console.log(error);
        res.status(500).json({
            success: false,
            data: "Internal Server Error",
            message: error.message
        });
    }
}

exports.getTodoById = async (req, res) => {
    try {
        const id = req.params.id;
        const todo = await Todo.findById({_id: id});

        if(!todo) {
            return res.status(404).json({
                success: false,
                message: "No todo found by given Id"
            })
        }

        res.status(200).json({
            success: true,
            data: todo, 
            message: "To do found successfully"
        })
    }
    catch(error) {
        console.log(error);
        res.status(500).json({
            success: false,
            data: "No data found",
            message: error.message
        })
    }
}