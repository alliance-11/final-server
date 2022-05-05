const express = require("express");
const students = require("./data/students.json");
const teachers = require("./data/teachers.json");
const users = require("./data/users.json");
const usersRouter = require("./routes/users.router");
const teachersRouter = require("./routes/teachers.router");
const studentsRouter = require("./routes/students.router");
// import mongoose from "mongoose";
// import dotenv from "dotenv";
// dotenv.config()
// mongoose.connect(process.env.MONGOURI);

// console.log(students);

const app = express();

//HOME ROUTE
app.get("/", (req, res) => {
  //   res.json(`<h2>Hi</h2>
  res.send(`<h2>Hi</h2>
  <a href="/users">Users</a> |
  <a href="/teachers">Teachers</a> |
  <a href="/students">Students</a>
    `);
});

// MINI APIs
app.use("/users", usersRouter);
app.use("/teachers", teachersRouter);
app.use("/students", studentsRouter);

// app.get("/teachers", (reg, res) => {
//     res.json(teachers);
// })
// app.get("/users", (reg, res) => {
//     res.json(users);
// })

// STARTUP API and listen for incoming requests on PORT 5000
// const PORT = process.env.PORT || 5000;
const PORT =
  "mongodb+srv://elis:elis@cluster0.ldv56.mongodb.net/final?retryWrites=true&w=majority" ||
  5000;
// const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Listen on http://localhost:${PORT}`);
});
