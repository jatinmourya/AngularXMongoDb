var mongoose = require("mongoose");

module.exports = mongoose.model("users", {
  _id: Number,
  name: String,
  email: String,
  username: String,
  password: String,
});
