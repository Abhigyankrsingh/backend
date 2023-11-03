const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/practice")


mongoose.Schema({
  username: String,
  name: String,
  age:Number,
})


mongoose.model(naam, schema);