/* eslint-disable camelcase */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
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
    color: {
        type: Object,
        required: false
    },
    highest_education: {
        type: String,
        required: false
    },
    previous_institute: {
        type: String,
        required: false
    },
    grades: {
        type: Object,
        required: false
    },
    created_time: {
        type: Date,
        default: Date.now()
    }
});

const student = mongoose.model("Student", StudentSchema);

module.exports = {Student: student};