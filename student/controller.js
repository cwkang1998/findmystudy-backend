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
      grades: body.grades,
      color: body.color
    });
    res.status(201).json(data);
  } catch (err) {
    res.status(400).json({ err });
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
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json({ err });
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
      res.status(404).json({ err: "Document with that id does not exist." });
      return;
    }
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json({ err });
    return;
  }
}

module.exports = {
  CreateStudentController,
  ListStudentController,
  RetrieveStudentController
};
