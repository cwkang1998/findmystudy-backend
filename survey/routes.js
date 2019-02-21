const express = require("express");
const route = express.Router();
const controller = require("./controller");
const models = require("./models");
const Survey = models.Survey;

route.get("/", controller.ListSurveyController);

module.exports = route;