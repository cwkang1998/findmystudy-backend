const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const config = require("./config");

mongoose.connect(config.DB_URL, {"useNewUrlParser": true});
mongoose.Promise = global.Promise;
mongoose.connection.on(
    "error",
    console.error.bind(console, "mongodb connection err:")
);

const app = express();
app.use(logger("tiny"));
app.use(bodyParser.json());

// Handles no matching url
app.use((req, res, next) => {
    const err = {
        "description": "404 not found",
        "status": 404
    };

    next(err);
});

// Handles error for server
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({"error": err.description});
});

module.exports = app;