const models = require("./models");
const University = models.University;
const Course = models.Course;

function ListUnisController(req, res, next) {
    res.json({"uni": "uni"});
}

function RetreiveUniController(req, res, next) {
    res.json({"uni": "uni"});
}

function ListCourseController(req, res, next) {
    res.json({"uni": "uni"});
}

function RetrieveCourseController(req, res, next) {
    res.json({"uni": "uni"});
}

module.exports = {
    ListUnisController,
    RetreiveUniController,
    ListCourseController,
    RetrieveCourseController
};