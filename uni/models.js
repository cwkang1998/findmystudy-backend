const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UniversitySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        required: true,
        default: "/uploads/placeholder.png"
    }
});

const CourseSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    university: {
        type: Schema.Types.ObjectId,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    costs: Number
});

const university = mongoose.model("University", UniversitySchema);
const course = mongoose.model("Course", CourseSchema);

module.exports = {
    University: university,
    Course: course
};