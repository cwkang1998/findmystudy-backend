const express = require("express");
const route = express.Router();
const controller = require("./controller");
const models = require("./models");
const Student = models.Student;
const auth = require("../admin/auth");

route.get("/", auth, controller.ListStudentController);
route.post("/", controller.CreateStudentController);
route.get("/:id", auth, controller.RetrieveStudentController);

module.exports = route;