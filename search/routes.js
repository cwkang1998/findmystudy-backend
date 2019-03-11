const express = require("express");
const route = express.Router();
const controller = require("./controller");

route.get("/uni", controller.ListUnisController);
route.get("/uni/:id", controller.RetreiveUniController);
route.get("/course", controller.ListCourseController);
route.get("/course/:id", controller.RetrieveCourseController);

route.post("/uni", controller.CreateUnisController);
route.post("/course", controller.CreateCourseController);
route.put("/uni/:id", controller.UpdateUnisController);
route.put("/course/:id", controller.UpdateCourseController);
route.delete("/uni/:id", controller.DeleteUnisController);
route.delete("/course/:id", controller.DeleteCourseController);

module.exports = route;