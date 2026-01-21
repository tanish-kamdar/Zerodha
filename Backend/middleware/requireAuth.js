const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = async function requireAuth(req, res, next) {
  const authHeader = req.headers["authorization"];

  if (!authHeader)
    return res.status(401).json({
      success: false,
      message: "Auth Header missing",
    });

  console.log(`Auth Header : ${authHeader}`);
  let accessToken;

  accessToken = authHeader.split(" ")[1];

  if (!accessToken)
    return res.status(401).json({
      success: false,
      message: "Access Token missing",
    });

  console.log(`Access Token : ${accessToken}`);

  jwt.verify(accessToken, process.env.TOKEN_KEY, (err, user) => {
    if (err) {
      console.log("Access token not verified.");
      console.log(err.name, err.message);

      return res.status(401).json({
        success: false,
        message: "Access Token not verified.",
      });
    }

    console.log("Access Token verified.");

    req.user = user;
    next();
  });
};
