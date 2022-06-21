const dotenv = require("dotenv")
const express = require("express");
const cors = require("cors")
const connection = require("./connect-db");
const usersRouter = require("./routes/users.router");
const teachersRouter = require("./routes/teachers.router");
const studentsRouter = require("./routes/students.router");
const todosRouter= require("./routes/todos.router")
dotenv.config() // parse .env file and store it in object process.env

const app = express();

app.use(express.json());

app.use(cors({ origin: process.env.FRONTEND_ORIGIN })) // allow accessing our API from the ANY other domain!
// app.use(cors({ origin: process.env.FRONTEND_ORIGIN || "http://localhost:3000" })) // allow accessing our API from the ANY other domain!
// app.use(
//   cors({
//     origin: process.env.ORIGIN_URL || "http://localhost:3000",
//     credentials: true, // accept incoming cookies
//   })
// );


//HOME ROUTE
app.get("/", (req, res) => {
  //   res.json(`<h2>Hi</h2>
  res.send(`<h2>Final</h2>
  <a href="/users">Users</a> |
  <a href="/teachers">Teachers</a> |
  <a href="/students">Students</a> |
  <a href="/todos">Todos</a> 
    `);
});

// MINI APIs
app.use("/users", usersRouter);
app.use("/teachers", teachersRouter);
app.use("/students", studentsRouter);
app.use("/todos", todosRouter);

// catch all route => usually used for 404 (=> not found)
app.use((req, res) => {
  res.status(404).json({
    error: "Route not found!",
  });
});

const PORT = 5000 || process.env.PORT
app.listen(PORT, () => {
  console.log(`Listen on http://localhost:` + PORT);
});
