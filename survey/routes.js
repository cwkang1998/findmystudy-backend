const express = require("express");
const route = express.Router();
const controller = require("./controller");
const models = require("./models");
const Survey = models.Survey;

route.get("/", controller.ListSurveyController);

// Extra feature for creating survey questions in admin panel
route.post("/", controller.CreateSurveyController);
route.put("/", controller.UpdateSurveyController);

module.exports = route;