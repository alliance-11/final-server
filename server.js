import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
// import {connection} from "./connect-db"
import {usersRouter} from "./routes/users.router.js"
import {teachersRouter} from "./routes/teachers.router.js";
import {studentsRouter} from "./routes/students.router.js";
import {todosRouter} from "./routes/todos.router.js";
dotenv.config(); // parse .env file and store it in object process.env

const app = express();

app.use(express.json());
mongoose.connect(process.env.MONGO_URI);


app.use(cors({ origin: process.env.FRONTEND_ORIGIN })); // allow accessing our API from the ANY other domain!
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

const PORT = 5000 || process.env.PORT;
app.listen(PORT, () => {
  console.log(`Listen on http://localhost:` + PORT);
});
