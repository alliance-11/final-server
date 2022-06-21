import express from "express";
// import teachers from "../data/teachers.json";
import {Teacher} from "../models/teachersModel.js";

export const teachersRouter = express.Router();

// GET All teachers
teachersRouter.get("/", async (req, res) => {
  // await => waits for the data to get returned AND unpacks the received promise BOX
  const teachers = await Teacher.find();
  // we just get a box BACK => EITHER there is the DATA inside OR some error!
  // const promData = Teacher.find()
  res.json(teachers);
});

// GET  /teachers/id -> single teacher
teachersRouter.get("/:id", async (req, res) => {
  const teacherId = req.params.id;
  console.log({ teacherId });
  // fetch SINGLE teacher by ID => WAIT for the result and UNPACK it from the Box
  const teacher = await Teacher.findById(teacherId);
  res.json(teacher);
});

// POST /teachers
// will listen for incoming POST requests, data will be in req.body
teachersRouter.post("/", async (req, res) => {
  console.log("POST request received: ", req.body);
  // forward data in body to database
  const teacherNew = await Teacher.create(req.body);
  res.json(teacherNew);
});

// PATCH /teachers/id
teachersRouter.patch("/:id", async (req, res) => {
  const teacherId = req.params.id; // ID of teacher
  const dataUpdate = req.body; // data to UPDATE on teacher

  const teacherUpdated = await Teacher.findByIdAndUpdate(
    teacherId,
    dataUpdate,
    { new: true }
  );
  res.json(teacherUpdated);
});

// DELETE /teachers/id
teachersRouter.delete("/:id", async (req, res) => {
  const teacherId = req.params.id;

  const teacherDeleted = await Teacher.findByIdAndDelete(teacherId);

  res.json(teacherDeleted);
});
