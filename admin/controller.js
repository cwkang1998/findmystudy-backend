const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const models = require("./models");
const Admin = models.Admin;
const SECRET_KEY = require("../config").SECRET_KEY;

async function LoginController(req, res, next) {
  const body = req.body;
  if (!body.username) {
    res.status(400).json({ err: "username field is required." });
    return;
  }
  if (!body.password) {
    res.status(400).json({ err: "password field is required." });
    return;
  }
  let query = Admin.findOne(
    {
      username: body.username,
      password: crypto
        .createHmac("sha512", SECRET_KEY)
        .update(body.password)
        .digest("hex")
    },
    "_id username"
  );
  try {
    let data = await query.exec();
    if (!data) {
      res.status(401).json({ err: "incorrect username/password" });
      return;
    }
    const token_created_time = Date.now();
    data = {
      _id: data._id,
      username: data.username,
      token_created_time: token_created_time
    };
    const token = jwt.sign(data, SECRET_KEY);
    res.status(200).json({
      _id: data._id,
      username: data.username,
      token: token,
      token_created_time: token_created_time
    });
  } catch (err) {
    res.status(401).json({ err });
    return;
  }
}

/**
 * Creates a new admin account.
 * Only existing admin accounts can create new admin accounts.
 * returns created admin account details.
 * @param {Function} req 
 * @param {Function} res 
 * @param {Function} next 
 */
async function SignUpController(req, res, next) {
  const body = req.body;
  if (!body.username) {
    res.status(400).json({ err: "username field is required." });
    return;
  }
  if (!body.password) {
    res.status(400).json({ err: "password field is required." });
    return;
  }
  try {
    let data = await Admin.create({
      username: body.username,
      password: crypto
        .createHmac("sha512", SECRET_KEY)
        .update(body.password)
        .digest("hex")
    });
    res.status(200).json({
      _id: data._id,
      username: data.username,
      created_time: data.created_time
    });
  } catch (err) {
    if (err.name == "MongoError") {
      res.status(400).json({ err: "username already taken." });
      return;
    }
    res.status(400).json({ err });
    return;
  }
}

module.exports = {
  LoginController,
  SignUpController
};
