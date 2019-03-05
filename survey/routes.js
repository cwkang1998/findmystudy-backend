const express = require("express");
const route = express.Router();
const controller = require("./controller");
const models = require("./models");
const Survey = models.Survey;

route.get("/", controller.ListSurveyController);

// TODO: Extra feature for creating survey questions in admin panel
// Route.post("/", controller.CreateSurveyController);
// Route.put("/", controller.UpdateSurveyController);

module.exports = route;