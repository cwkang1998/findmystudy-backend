const express = require("express");
const route = express.Router();
const controller = require("./controller");
const models = require("./models");
const Question = models.Question;

route.get("/student", controller.ListStudentController);
route.get("/student/:id", controller.RetrieveStudentController);

route.get("/questions", (req, res) => {
    Question.find({}, (err, questions) => {
        console.log(err)
        res.json(questions);
    });
});

module.exports = route;