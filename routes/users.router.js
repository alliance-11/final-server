import express from "express"
// import users from "../data/users.json"
import {UserModel} from "../models/usersModel.js"

export const usersRouter = express.Router();

// GET all users
usersRouter.get("/", async(req, res) => {
  const users = await UserModel.find()
  res.json(users);
});

// GET single
usersRouter.get("/:id", async (req, res) => {
  const userId = req.params.id;
const user = await UserModel.findById(userId);
  res.json(user);
});

// CREATE
usersRouter.post("/", async (req, res)=>{
  const userNew= await UserModel.create(req.body)
  res.json(userNew);
})

// DELETE
usersRouter.delete("/:id", async (req, res)=>{
  const userDelete= await UserModel.findByIdAndDelete(req.params.id)
  res.json(userDelete);
})

// EDIT
usersRouter.patch("/:id", async (req, res)=>{
const userUpdated= await UserModel.findByIdAndUpdate(req.params.id, req.body, {new: true})
res.json(userUpdated);
})
