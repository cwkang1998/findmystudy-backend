const express = require("express");
const route = express.Router();
const controller = require("./controller");

route.get("/uni", controller.ListUnisController);
route.get("/uni/:id", controller.RetreiveUniController);
route.get("/course", controller.ListCourseController);
route.get("/course/:id", controller.RetrieveCourseController);

module.exports = route;