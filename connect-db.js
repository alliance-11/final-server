const mongoose = require("mongoose")

// const DB_NAME = "final"
const MONGO_URI =
  // `mongodb+srv://elis:elis@cluster0.eoohx.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`
  `mongodb+srv://elis:elis@cluster0.eoohx.mongodb.net/final?retryWrites=true&w=majority`


const promConnection = mongoose
  .connect( MONGO_URI
    // .connect("mongodb://localhost/model")
  )
  .then(() => {
    console.log("DB connection established!")
  })
  .catch((err) => {
    console.log("DB connection failed!", err.message)
  })

module.exports = promConnection
