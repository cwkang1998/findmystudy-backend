const express = require("express");
const route = express.Router();
const controller = require("./controller");

route.get("/", controller.ListUnisController);
route.post("/", controller.CreateUnisController);
route.get("/:id", controller.RetreiveUniController);
route.put("/:id", controller.UpdateUnisController);
route.delete("/:id", controller.DeleteUnisController);

module.exports = route;