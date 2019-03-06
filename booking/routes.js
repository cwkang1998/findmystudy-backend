const express = require("express");
const route = express.Router();
const controller = require("./controller");
const models = require("./models");

route.get("/",controller.ListBookingController);
route.post("/",controller.CreateBookingController);

module.exports = route;