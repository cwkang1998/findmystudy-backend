const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    id: Number,
    name: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    color: String,
    highest_education: {
        type: String,
        required: false
    },
    previous_institute: {
        type: String,
        required: false
    },
    grades: {
        type: String,
        required: false
    },
    created_time: {
        type: Date,
        default: Date.now()
    }
});

const student = mongoose.model("Student", StudentSchema);

module.exports = {
    Student: student
};