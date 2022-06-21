import express from "express";
// import students from "../data/students.json";
import {StudentModel} from "../models/studentsModel.js";

export const studentsRouter = express.Router();

//GET route => kann man direct im BROWSER aufrufen
studentsRouter.get("/", async (req, res) => {
  const students = await StudentModel.find();
  // respond to BROWSER with ALL students in array
  res.json(students);
});

// GET  /teachers/id -> single student
studentsRouter.get("/:id", async (req, res) => {
  const studentId = req.params.id;
  // const studentFound = students.find((student) => student.id === studentId);
  //   res.send(req.params.id);
  console.log({ studentId });
  const student = await StudentModel.findById(studentId);
  res.json(student);
});

// POST /students
studentsRouter.post("/", async (req, res) => {
  const studentNew = await StudentModel.create(req.body);
  res.json(studentNew);
});

// PATCH /students/id
studentsRouter.patch("/:id", async (req, res) => {
  const studentId = req.params.id;
  const dataUpdate = req.body;
  const studentUpdated = await StudentModel.findByIdAndUpdate(
    studentId,
    dataUpdate,
    { new: true }
  );
  res.json(studentUpdated);
});

// DELETE /students/id
studentsRouter.delete("/:id", async (req, res) => {
  const studentId = req.params.id;
  const studentDeleted = await StudentModel.findByIdAndDelete(studentId);
  res.json(studentDeleted);
});
