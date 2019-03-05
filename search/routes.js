const express = require("express");
const route = express.Router();
const controller = require("./controller");

route.get("/uni", controller.ListUnisController);
route.get("/uni/:id", controller.RetreiveUniController);
route.get("/course", controller.ListCourseController);
route.get("/course/:id", controller.RetrieveCourseController);

// TODO: Implement these if auto scraping was scraped.
// Route.post("/uni", controller.CreateUnisController);
// Route.post("/course", controller.CreateCourseController);
// Route.put("/uni", controller.CreateUnisController);
// Route.put("/course", controller.CreateCourseController);
// Route.delete("/uni", controller.CreateUnisController);
// Route.delete("/course", controller.CreateCourseController);
module.exports = route;