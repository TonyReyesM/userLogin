const jwt = require("jsonwebtoken");

const generateRefreshToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_REFRESH, {
    expiresIn: "1d",
  });
};

module.exports = generateRefreshToken;
