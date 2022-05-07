const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const studentSchema = new Schema({
  name: { type: String, required: true },
  specialization: { type: String, required: true },
});

const StudentModel = model("Student", studentSchema);

module.exports = StudentModel;
