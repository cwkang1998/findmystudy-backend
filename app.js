var express = require("express");
var logger = require("morgan");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var config = require("./config");

mongoose.connect(
    config.DB_URL,
    { useNewUrlParser: true }
);
mongoose.Promise = global.Promise;
mongoose.connection.on(
    "error",
    console.error.bind(console, "mongodb connection err:")
);

var app = express();

app.use(logger("tiny"));
app.use(bodyParser.json());

//Handles no matching url
app.use((req, res, next) => {
    var err = {
        description: "404 not found",
        status: 404
    };
    next(err);
});

//Handles error for server
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({ error: err.description });
});

module.exports = app;
