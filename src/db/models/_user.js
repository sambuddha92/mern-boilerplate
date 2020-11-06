const mongoose = require("mongoose");

// Define the model
const Schema = new mongoose.Schema({
  login_id: {
    type: String,
    required: true,
    unique: true,
  },
  hashed_password: {
    type: String,
    required: true,
  },
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
  },
});

// Export the model
module.exports = mongoose.model("User", Schema);
