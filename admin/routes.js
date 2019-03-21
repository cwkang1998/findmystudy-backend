const express = require("express");
const route = express.Router();
const controller = require("./controller");
const auth = require("./auth");

route.post("/login", controller.LoginController);
route.post("/signup", controller.SignUpController);

module.exports = route;