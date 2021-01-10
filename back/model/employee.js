const mongoose = require("mongoose");

const empSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  mobile: Number,
  email: String,
  states: String,
  city: String,
});
const Employee = mongoose.model("employee", empSchema);

module.exports = { Employee };
