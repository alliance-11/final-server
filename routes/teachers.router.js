const express = require("express");
const teachers = require("../data/teachers.json");
const teachersModel = require("../models/teachersModel")

const teachersRouter = express.Router();

teachersRouter.get("/", (reg, res) => {
  res.json(teachers);
});

teachersRouter.get("/:id", (reg, res) => {
  const studentId = reg.params.id;
  // res.json(teachers);
  const studentFound = teachers.find((student) => student.id === studentId);
//   res.send(req.params.id);
  res.send(studentFound);
});

// export default = teachersRouter
module.exports = teachersRouter;
