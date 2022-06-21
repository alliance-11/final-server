import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;

// `mongodb+srv://elis:elis@cluster0.eoohx.mongodb.net/final?retryWrites=true&w=majority`

export const promConnection = mongoose
  .connect(
    MONGO_URI
    // .connect("mongodb://localhost/model")
  )
  .then(() => {
    console.log("DB connection established!");
  })
  .catch((err) => {
    console.log("DB connection failed!", err.message);
  });
