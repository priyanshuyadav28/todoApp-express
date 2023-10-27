
const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema( {
    title: {
        type: String, 
        maxLength: 30,
        required: true,
    }, 
    description: {
        type: String,
        maxLength: 100,
        required: true,
    }, 
    createdAt: {
        type: Date,
        default: Date.now(),
        required: true,
    }, 
    updatedAt: {
        type: Date,
        default: Date.now(),
        required: true,
    }
});

module.exports = mongoose.model("Todo", todoSchema);