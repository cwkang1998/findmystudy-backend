const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SurveySchema = new Schema({
    no: Number,
    content: String,
    color: String
});

const survey = mongoose.model("Survey", SurveySchema);

module.exports = {Survey: survey};