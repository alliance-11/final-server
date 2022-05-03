const express = require("express");
const teachers = require("../data/teachers.json");

const teachersRouter = express.Router();

//GET route => kann man direct im BROWSER aufrufen
teachersRouter.get("/", (reg, res) => {
  // respond to BROWSER with ALL teachers in array
  res.json(teachers);
});

//Will handle these requests: /teachers/id
teachersRouter.get("/:id", (reg, res) => {
  const studentId = reg.params.id;
  // respond to BROWSER with ALL teachers in array
  // res.json(teachers);
  const studentFound = teachers.find((student) => student.id === studentId);
//   res.send(req.params.id);
  res.send(studentFound);
});

// export default = teachersRouter
module.exports = teachersRouter;
