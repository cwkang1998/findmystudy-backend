const express = require("express");
const route = express.Router();
const controller = require("./controller");
const models = require("./models");
const auth = require("../admin/auth");

route.get("/", auth, controller.ListBookingController);
route.post("/", controller.CreateBookingController);

module.exports = route;