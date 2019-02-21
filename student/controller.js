const models = require("./models");
const Student = models.Student;

function ListStudentController(req, res, next) {
    res.json({"student": "student"});
}

function RetrieveStudentController(req, res, next) {
    const u = Student.findById(id, function (err, student) {});
    res.json(u);
}

module.exports = {
    ListStudentController,
    RetrieveStudentController
};