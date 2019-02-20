const models = require("./models");
const Student = models.Student;

function ListStudentController(req, res, next) {
    res.json({"student": "student"});
}

function RetrieveStudentController(req, res, next) {
    res.json({"student": "student"});
}

function ListQuestionsController(req, res, next) {
    res.json({"uni": "uni"});
}

module.exports = {
    ListStudentController,
    RetreiveStudentController,
    ListQuestionsController
};