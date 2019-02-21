const express = require("express");
const route = express.Router();
const controller = require("./controller");
const models = require("./models");
const Student = models.Student;

route.get("/student", controller.ListStudentController);
route.get("/student/:id", controller.RetrieveStudentController);

module.exports = route;