const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const teacherSchema = new Schema({
  name: { type: String, required: true },
  city: { type: String, required: true },
});

const Teacher = model("Teacher", teacherSchema);

module.exports = Teacher;
