const models = require("./models");
const Survey = models.Survey;

function ListSurveyController(req, res, next) {
    Survey.find({}, "no content color", (err, data) => {
        if (err) {
            res.status(400).json({err});
            return;
        }
        res.status(200).json(data);
    });
}

module.exports = {
    ListSurveyController
};

