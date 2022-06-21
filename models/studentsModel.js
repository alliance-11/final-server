import mongoose from "mongoose";

const { Schema, model } = mongoose;

const studentSchema = new Schema({
  name: { type: String, required: true },
  specialization: { type: String, required: true },
});

export const StudentModel = model("Student", studentSchema);
