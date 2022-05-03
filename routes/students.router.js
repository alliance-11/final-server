const express = require("express");
const students = require("../data/students.json");

const studentsRouter = express.Router();

//GET route => kann man direct im BROWSER aufrufen
studentsRouter.get("/", (reg, res) => {
  // respond to BROWSER with ALL students in array
  res.json(students);
});

//Will handle these requests: /students/id
studentsRouter.get("/:id", (reg, res) => {
  const studentId = reg.params.id;
  // respond to BROWSER with ALL students in array
  // res.json(students);
  const studentFound = students.find((student) => student.id === studentId);
//   res.send(req.params.id);
  res.send(studentFound);
});

// export default = studentsRouter
module.exports = studentsRouter;
