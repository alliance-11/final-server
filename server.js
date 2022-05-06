const express = require("express");
// const cors = require("cors")
const connection = require("./connect-db")
const students = require("./data/students.json");
// const teachers = require("./data/teachers.json");
const users = require("./data/users.json");
const usersRouter = require("./routes/users.router");
const teachersRouter = require("./routes/teachers.router");
const studentsRouter = require("./routes/students.router");


// console.log(students);

const app = express();

// Parse all incoming JSON bodies into req.body variable
// register JSON parser middleare
app.use( express.json() )
// app.use( cors() ) // allow accessing our API from the BROWSER!

//HOME ROUTE
app.get("/", (req, res) => {
  //   res.json(`<h2>Hi</h2>
  res.send(`<h2>Hi</h2>
  <a href="/users">Final-Users</a> |
  <a href="/teachers">Final-Teachers</a> |
  <a href="/students">Final-Students</a>
    `);
});

// MINI APIs
app.use("/users", usersRouter);
app.use("/teachers", teachersRouter);
app.use("/students", studentsRouter);

// catch all route => usually used for 404 (=> not found)
app.use( (req, res) => {
  res.status(404).json({
    error: "Route not found!"
  })
})

// STARTUP API and listen for incoming requests on PORT 5000
// const PORT = process.env.PORT || 5000;
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Listen on http://localhost:${PORT}`);
});
