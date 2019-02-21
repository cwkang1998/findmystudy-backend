const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuestionsSchema = new Schema({
    no: Number,
    content: String,
    color: String
});

const questions = mongoose.model("Questions", QuestionsSchema);

module.exports = {
    Question: questions
};