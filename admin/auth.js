const jwt = require("jsonwebtoken");
const config = require("../config");
const SECRET_KEY = config.SECRET_KEY;
const JWT_ALIVE_TIME = config.JWT_ALIVE_TIME;

/**
 * Middleware for JWT authentication for admin access in mystudy application
 * @param {Function} req
 * @param {Function} res
 * @param {Function} next
 */
async function JWTAdminAuthMiddleware(req, res, next) {
  let err = new Error("Authentication Error.");
  err.status = 403; //403 permission denied error
  try {
    //Get the token keyword and only accepts if it starts with 'Token'
    const tokenKeyword = req.headers.authorization.split(" ")[0];
    if (tokenKeyword == "Token") {
      //Get the actual JWT token
      const token = req.headers.authorization.split(" ")[1];
      const payload = await jwt.verify(token, SECRET_KEY);
      if (payload) {
        //check if the token is expired.
        if (
          Date.now() - new Date(payload.token_created_time) >
          JWT_ALIVE_TIME
        ) {
          err = new Error("Token Expired. Please Authenticate Again.");
          err.status = 403;
          next(err);
          return;
        }
        req.userID = payload.userID; //Set userID to request and forward to other controllers
        next();
      } else {
        next(err);
      }
    } else {
      next(err);
    }
  } catch (e) {
    next(err);
  }
}

module.exports = JWTAdminAuthMiddleware;
