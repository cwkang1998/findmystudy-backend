const express = require("express");
const route = express.Router();
const controller = require("./controller");
const auth = require("./auth");

route.post("/login", controller.LoginController);
route.post("/signup", auth, controller.SignUpController);

module.exports = route;