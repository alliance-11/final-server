import express from "express";
// import todos from "../data/todos.json";
import {Todo} from "../models/todosModel.js";

export const todosRouter = express.Router();

todosRouter.get("/", async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

todosRouter.get("/:id", async (req, res) => {
  const todoId = req.params.id;
  console.log({ todoId });
  const todo = await Todo.findById(todoId);
  res.json(todo);
});

todosRouter.post("/", async (req, res) => {
  console.log(("POST request received: ", req.body));
  const todoNew = await Todo.create(req.body);
  res.json(todoNew);
});

todosRouter.patch("/:id", async (req, res) => {
  const todoId = req.params.id;
  const dataUpdate = req.body;

  const todoUpdated = await Todo.findByIdAndUpdate(todoId, dataUpdate, {
    new: true,
  });
  res.json(todoUpdated);
});

todosRouter.delete("/:id", async (req, res) => {
  const todoDeleted = await Todo.findByIdAndDelete(req.params.id);
  res.json(todoDeleted);
});
