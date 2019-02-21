const models = require("./models");
const Student = models.Student;

function CreateStudentController(req, res, next) {
    const body = req.body;
    console.log(body);
    Student.create(
        {
            name: body.name,
            dob: body.dob,
            gender: body.gender,
            highest_education: body.highest_education,
            previous_institute: body.previous_institute,
            grades: body.grades,
            color: body.color,
            created_time: body.created_time
        },
        (err, data) => {
            if (err) {
                res.status(400).json({err});
                return;
            }
            res.status(201).json(data);
        }
    );
}

function ListStudentController(req, res, next) {
    Student.find(
        {},
        "_id name dob gender color highest_education previous_institute grades created_time",
        (err, data) => {
            if (err) {
                res.status(400).json({err});
                return;
            }
            res.status(200).json(data);
        }
    );
}

function RetrieveStudentController(req, res, next) {
    Student.findById(
        {_id: req.params.id},
        "_id name dob gender color highest_education previous_institute grades created_time",
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
    CreateStudentController,
    ListStudentController,
    RetrieveStudentController
};