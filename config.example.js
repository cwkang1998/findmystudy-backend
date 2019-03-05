/**
 * Example configuration file needed by this project.
 * Please do not commit your server secrets or credentials onto version control.
 */

module.exports = {
    "PORT": 3000,
    "HOST": "0.0.0.0",
    "DB_URL": `mongodb://mylogin:${encodeURIComponent("mypass")}@localhost:27017/mydatabasename`,
    "SECRET_KEY": "This is an example secret key.",
    "JWT_ALIVE_TIME": 3600000
};