const express = require("express");
const route = express.Router();
const surveyRoutes = require("./survey/routes");
const uniRoutes = require("./uni/routes");
const studentRoutes = require("./student/routes");
const adminRoutes = require("./admin/routes");
const bookingRoutes = require("./booking/routes");

// Main Routes setup
route.use("/survey", surveyRoutes);
route.use("/uni", uniRoutes);
route.use("/student", studentRoutes);
route.use("/admin", adminRoutes);
route.use("/booking", bookingRoutes);

// Handles no matching url
route.use((req, res, next) => {
    const err = new Error("404 not found.");
    err.status = 404;
    next(err);
});

// Handles error for server
route.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({error: err.message});
});

module.exports = route;