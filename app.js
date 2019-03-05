const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const config = require("./config");
const surveyRoutes = require("./survey/routes");
const searchRoutes = require("./search/routes");
const studentRoutes = require("./student/routes");
const adminRoutes = require("./admin/routes");

// Setup global connection to mongodb
mongoose.connect(config.DB_URL, {useNewUrlParser: true});
mongoose.Promise = global.Promise;
mongoose.connection.on(
  "error",
  console.error.bind(console, "mongodb connection err:")
);

// Setup application instances
const app = express();

// Middleware setup
app.use(logger("tiny"));
app.use(bodyParser.json());

// Routes setup
app.use("/survey", surveyRoutes);
app.use("/search", searchRoutes);
app.use("/student", studentRoutes);
app.use("/admin", adminRoutes);

// Handles no matching url
app.use((req, res, next) => {
  const err = new Error("404 not found.");
  err.status = 404;
  next(err);
});

// Handles error for server
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({error: err.message});
});

module.exports = app;