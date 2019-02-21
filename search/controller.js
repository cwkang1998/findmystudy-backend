const models = require("./models");
const University = models.University;
const Course = models.Course;

function ListUnisController(req, res, next) {
    University.find({}, "_id name description address country", (err, data) => {
        if (err) {
            res.status(400).json({err});
            return;
        }
        res.status(200).json(data);
    });
}

function RetreiveUniController(req, res, next) {
    University.findById(
        {_id: req.params.id},
        "_id name description address country",
        (err, data) => {
            if (err) {
                res.status(400).json({err});
                return;
            }
            if (data === null) {
                res.status(404).json({err: "Document with that id does not exist."});
                return;
            }
            res.status(200).json(data);
        }
    );
}

function ListCourseController(req, res, next) {
    Course.find({}, "_id name university description cost", (err, data) => {
        if (err) {
            res.status(400).json({err});
            return;
        }
        res.status(200).json(data);
    });
}

function RetrieveCourseController(req, res, next) {
    Course.findById(
        {_id: req.params.id},
        "_id name university description cost",
        (err, data) => {
            if (err) {
                res.status(400).json({err});
                return;
            }
            if (data === null) {
                res.status(404).json({err: "Document with that id does not exist."});
                return;
            }
            res.status(200).json(data);
        }
    );
}

module.exports = {
    ListUnisController,
    RetreiveUniController,
    ListCourseController,
    RetrieveCourseController
};