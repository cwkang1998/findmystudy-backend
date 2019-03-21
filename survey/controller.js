const models = require("./models");
const Survey = models.Survey;

async function CreateSurveyController(req, res, next) {
  const body = req.body;
  try {
    let data = await Survey.create({
      no: body.no,
      content: body.content,
      color: body.color
    });
    res.status(201).json({
      _id: data._id,
      no: data.no,
      content: data.content,
      color: data.color
    });
  } catch (err) {
    res.status(400).json({ err:err.message });
    return;
  }
}

async function ListSurveyController(req, res, next) {
    let query = Survey.find({}, "no content color");
    try {
        let data = await query.exec();
        res.status(200).json(data);
    } catch (err) {
        res.status(400).json({ err: err.message });
        return;
    }
}

async function UpdateSurveyController(req, res, next) {
  const body = req.body;
  let updateDetails = { _id: req.params.id };
  if (body.no) {
    updateDetails.no = parseInt(body.no);
  }
  if (body.content) {
    updateDetails.content = body.content;
  }
  if (body.color) {
    updateDetails.color = body.color;
  }
  if (!body.no && !body.content && !body.color) {
    res.status(400).json({ err: "no update perimeter given" });
    return;
  }

  try {
    let data = await Survey.updateOne(updateDetails);
    res.status(200).json();
  } catch (err) {
    res.status(400).json({ err: err.message });
    return;
  }
}

module.exports = { 
  CreateSurveyController,
  ListSurveyController,
  UpdateSurveyController
};
