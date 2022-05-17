const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const userSchema = new Schema({
  name: { type: String, required: true },
  profession: { type: String, required: true },
  hobby: { type: String, required: true },
  email: { type: String, required: true },
  city: { type: String, required: true },
});

const UserModel = model("User", userSchema);

module.exports = UserModel;
