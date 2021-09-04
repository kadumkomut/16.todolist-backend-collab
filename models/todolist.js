const mongoose = require("mongoose");

const TodoList = new mongoose.Schema({
    text : {
        type: String,
        required: true,
    },
    date : {
        type: Date,
        default : Date.now
    }
})

module.exports = mongoose.model("todolist",TodoList);