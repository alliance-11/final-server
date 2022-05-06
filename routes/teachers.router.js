const express = require("express");
const teachers = require("../data/teachers.json");
const Teacher = require("../models/teachersModel")

const teachersRouter = express.Router();

// Route: /teachers
// GET All teachers
teachersRouter.get("/", async (req, res) => {

  // await => waits for the data to get returned AND unpacks the received promise BOX
  const teachers = await Teacher.find()

  // we just get a box BACK => EITHER there is the DATA inside OR some error!
  // const promData = Teacher.find()

  res.json(teachers);
});

// Route: /teachers/1
// GET single teacher
teachersRouter.get("/:id", async (req, res) => {
  const teacherId = req.params.id;
  console.log( { teacherId })
  // fetch SINGLE teacher by ID => WAIT for the result and UNPACK it from the Box
  const teacher = await Teacher.findById( teacherId )
  res.json( teacher );
});

// Route: POST /teachers
// will listen for incoming POST requests, data will be in req.body
teachersRouter.post("/", async (req, res) => {

  console.log("POST request received: ", req.body)

  // forward data in body to database
  const teacherNew = await Teacher.create( req.body )
  res.json( teacherNew )
})

teachersRouter.patch("/:id", async (req, res) => {
  const teacherId = req.params.id // ID of teacher
  const dataUpate = req.body // data to UPDATE on teacher

  const teacherUpdated = await Teacher.findByIdAndUpdate( teacherId, req.body, { new: true } )

  res.json( teacherUpdated )
})

teachersRouter.delete("/:id", async (req, res) => {
  const teacherId = req.params.id

  const teacherDeleted = await Teacher.findByIdAndDelete( teacherId )

  res.json( teacherDeleted )
})

// export default = teachersRouter
module.exports = teachersRouter;
