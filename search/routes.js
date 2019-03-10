const express = require("express");
const route = express.Router();
const controller = require("./controller");

route.get("/uni", controller.ListUnisController);
route.get("/uni/:id", controller.RetreiveUniController);
route.get("/course", controller.ListCourseController);
route.get("/course/:id", controller.RetrieveCourseController);

route.post("/uni", controller.CreateUnisController);
route.post("/course", controller.CreateCourseController);
//route.put("/uni", controller.CreateUnisController);
//route.put("/course", controller.CreateCourseController);
route.delete("/uni", controller.CreateUnisController);
route.delete("/course", controller.CreateCourseController);

module.exports = route;