const mongoose = require("mongoose");

mongoose
  .connect(
  // .connect("mongodb://localhost/model")
    // "mongodb+srv://elis:elis@cluster0.eoohx.mongodb.net/model?retryWrites=true&w=majority"
  )

  .then(() => {
    console.log("DB connection established!");
  })
  .catch((err) => {
    console.log("DB connection failed!", err.message);
  });
const { Schema, model } = mongoose;

const teacherSchema = new Schema({
  name: { type: String, required: true },
  city: { type: String, required: true },
});

const Teacher = model("Teacher", teacherSchema);

const addTeacher = async () => {
  const teacherCreated = await Teacher.create({
    name: "Luis",
    city: "Madrid",
  });
  console.log(teacherCreated);
};
addTeacher();

module.exports = Teacher;
