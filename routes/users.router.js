const express = require("express");
const users = require("../data/users.json");

const usersRouter = express.Router();

//GET route => kann man direct im BROWSER aufrufen
usersRouter.get("/", (reg, res) => {
  // respond to BROWSER with ALL users in array
  res.json(users);
});

//Will handle these requests: /users/id
usersRouter.get("/:id", (reg, res) => {
  const studentId = reg.params.id;
  // respond to BROWSER with ALL users in array
  // res.json(users);
  const studentFound = users.find((student) => student.id === studentId);
//   res.send(req.params.id);
  res.send(studentFound);
});

// export default = usersRouter
module.exports = usersRouter;
