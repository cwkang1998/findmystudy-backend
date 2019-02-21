const models = require("./models");
const Student = models.Student;

function ListStudentController(req, res, next) {
    res.json({"student": "student"});
}

function RetrieveStudentController(req, res, next) {
    res.json({"student": "student"});
}

module.exports = {
    ListStudentController,
    RetrieveStudentController
};