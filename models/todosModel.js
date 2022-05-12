const mongoose = require("mongoose");

const { Schema, model}= mongoose;

const todoSchema = new Schema({
    todo: { type: String, required: true },
    description: { type: String, required: true},
})

const Todo= model("Todo", todoSchema);

module.exports = Todo