const models = require("./models");
const Student = models.Student;

/**
 * Creates a student record in the server.
 * Students completed the quiz will have records(color) saved on server.
 * Students that did not complete quiz but went on to book will also have
 * some records and details saved.
 * @param {Function} req
 * @param {Function} res
 * @param {Function} next
 */
async function CreateStudentController(req, res, next) {
    const body = req.body;
    try {
        let data = await Student.create({
            name: body.name,
            dob: body.dob,
            gender: body.gender,
            highest_education: body.highest_education,
            previous_institute: body.previous_institute,
            // grades: body.grades,
            color: body.color
        });
        res.status(201).json({
            _id: data._id,
            name: data.name,
            dob: data.dob,
            gender: data.gender,
            highest_education: data.highest_education,
            previous_institute: data.previous_institute,
            // grades: data.grades,
            color: data.color
        });
    } catch (err) {
        res.status(400).json({ err: err.message });
        console.log(err);
        return;
    }
}

/**
 * Lists all students records gathered from the application.
 * Accessible by Admin only.
 * @param {Function} req
 * @param {Function} res
 * @param {Function} next
 */
async function ListStudentController(req, res, next) {
    let query = Student.find(
        {},
        "_id name dob gender color highest_education previous_institute grades created_time"
    );
    try {
        let data = await query.exec();
        // The next line rearranges the order of the data,
        // with the downside of needing to specify all keys
        data = JSON.parse(
            JSON.stringify(
                data,
                [
                    "_id",
                    "name",
                    "dob",
                    "gender",
                    "color",
                    "gold",
                    "green",
                    "blue",
                    "orange",
                    "highest_education",
                    "previous_institute",
                    "grades",
                    "created_time"
                ],
                4
            )
        );
        res.status(200).json(data);
    } catch (err) {
        res.status(400).json({ err: err.message });
        return;
    }
}

/**
 * Retrieve a single student record gathered from the application.
 * Accessible by Admin only.
 * @param {Function} req
 * @param {Function} res
 * @param {Function} next
 */
async function RetrieveStudentController(req, res, next) {
    let query = Student.findById(
        { _id: req.params.id },
        "_id name dob gender color highest_education previous_institute grades created_time"
    );
    try {
        let data = await query.exec();
        if (data === null) {
            res.status(404).json({
                err: "Document with that id does not exist."
            });
            return;
        }
        res.status(200).json(data);
    } catch (err) {
        res.status(400).json({ err: err.message });
        return;
    }
}

async function UpdateStudentController(req, res, next) {
    let body = req.body;
    body._id = req.params.id;
    try {
        await Student.updateOne({ _id: req.params.id }, body, {
            runValidators: true
        });
        res.status(200).json();
    } catch (err) {
        res.status(400).json({ err: err.message });
        return;
    }
}

module.exports = {
    CreateStudentController,
    ListStudentController,
    RetrieveStudentController,
    UpdateStudentController
};
