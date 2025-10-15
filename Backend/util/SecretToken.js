require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.createRefreshToken = (user) => {
  return jwt.sign(user, process.env.TOKEN_KEY, {
    expiresIn: '7d',
  });
};

module.exports.createAccessToken = (user) => {
  return jwt.sign(user, process.env.TOKEN_KEY, {
    expiresIn: '15m',
  });
};