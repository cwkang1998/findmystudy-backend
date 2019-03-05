const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AdminSchema = new Schema({
  username: {
        type: String,
    unique: true,
    required: true
    },
  password: {
    type: String,
    required: true
    },
  email: {type: String},
  created_time: {
    type: Date,
    default: Date.now()
    }
});

const admin = mongoose.model("Admin", AdminSchema);

module.exports = {Admin: admin};