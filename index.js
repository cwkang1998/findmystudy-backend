var app = require("./app");
var config = require("./config");

app.listen(config.PORT, config.HOST, () => {
    console.log("Listening at " + config.HOST + ":" + config.PORT);
})