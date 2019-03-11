const express = require("express");
const route = express.Router();
const controller = require("./controller");
const models = require("./models");
const Survey = models.Survey;

route.get("/", controller.ListSurveyController);

// A feature for admin to create or modify survey questions in admin panel 
route.post("/", controller.CreateSurveyController);
route.put("/:id", controller.UpdateSurveyController);

module.exports = route;