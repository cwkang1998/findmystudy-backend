const models = require("./models");
const Survey = models.Survey;

function ListSurveyController(req, res, next) {
    const o = Survey.find({}, (err, survey) => {
        console.log(err)
        res.json(survey);
    });
    res.json(o);
}

module.exports = {
    ListSurveyController
};

