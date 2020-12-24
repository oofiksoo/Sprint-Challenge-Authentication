const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../config/secrets.js");

/* 
  complete the middleware code to check if the user is logged in
  before granting access to the next middleware/route handler
*/

module.exports = (req, res, next) => {
    const token = req.headers.authorization;
    if (token) {
        jwt.verify(token, jwtSecret, (err, decodedToken) => {
            if (err) {
                res.status(401).json({ Error: "Invalid or Expired Token" });
            } else {
                req.user = decodedToken.user;

                next();
            }
        });
    } else {
        res.status(401).json({ you: "shall not pass!" });
    }
};