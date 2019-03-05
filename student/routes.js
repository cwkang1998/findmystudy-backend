const express = require("express");
const route = express.Router();
const controller = require("./controller");
const models = require("./models");
const Student = models.Student;

route.get("/", controller.ListStudentController);
route.post("/", controller.CreateStudentController);
route.get("/:id", controller.RetrieveStudentController);

module.exports = route;