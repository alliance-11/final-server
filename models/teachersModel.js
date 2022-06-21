import mongoose from "mongoose";

const { Schema, model } = mongoose;

const teacherSchema = new Schema({
  name: { type: String, required: true },
  city: { type: String, required: true },
});

export const Teacher = model("Teacher", teacherSchema);