const express = require("express");
const route = express.Router();
const controller = require("./controller");

route.get("/student", controller.ListStudentController);
route.get("/student/:id", controller.RetreiveStudentController);
route.get("/questions", controller.ListQuestionsController);

module.exports = route;