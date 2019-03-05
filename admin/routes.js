const express = require("express");
const route = express.Router();
const controller = require("./controller");
const JWTAdminAuthMiddleware = require("./auth");

route.post("/login", controller.LoginController);
route.post("/signup", JWTAdminAuthMiddleware, controller.SignUpController);

module.exports = route;