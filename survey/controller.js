const models = require("./models");
const Survey = models.Survey;

async function ListSurveyController(req, res, next) {
  let query = Survey.find({}, "no content color");
  try {
    let data = await query.exec();
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json({ err });
    return;
  }
}

module.exports = { ListSurveyController };
