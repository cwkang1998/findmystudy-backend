const path = require("path");
const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const config = require("./config");
const apiRoutes = require("./routes");

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
app.use(cors());
app.use(logger("tiny"));
app.use(express.json());

// API Endpoints
app.use("/api", apiRoutes);

// Media host
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

// React app (Currently removed)
// app.use("/", express.static(path.join(__dirname, "build/")));
// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "build/index.html"));
// });

module.exports = app;