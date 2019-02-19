const app = require("./app");
const config = require("./config");

app.listen(config.PORT, config.HOST, () => {
    console.log("Listening at " + config.HOST + ":" + config.PORT);
});