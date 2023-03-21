const mongoose = require("mongoose");

const User = mongoose.Schema(
  {
    Name: { type: String, required: true },
    Email: { type: String, required: true, unique: true },
    Password: { type: String, required: true },
    quote: { type: String },
  },
  { collection: "User-data" }
);

const model = mongoose.model("User-data", User);

module.exports = model;
