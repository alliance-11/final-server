import mongoose from "mongoose";

const { Schema, model } = mongoose;

const todoSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
});

export const Todo = model("Todo", todoSchema);
