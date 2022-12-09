const RefreshToken = require("../../models/refreshToken");
const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

//  utils
const generateAccessToken = require("../../utils/generateAccessToken");

// @desc    Create new access token
// @route   POST /api/users/token
// @access  Private
const refreshAccessToken = asyncHandler(async (req, res) => {
  const refreshToken = req.body.refreshToken;

  if (refreshToken === null) {
    res.status(403);
    throw new Error("Unauthorized, no refresh token");
  }
  const dbToken = await RefreshToken.findOne({ token: refreshToken });

  if (!dbToken) {
    res.status(401);
    throw new Error("Unauthorized, bad refresh token");
  }
  jwt.verify(refreshToken, process.env.JWT_REFRESH, (err, user) => {
    if (err) {
      res.status(403);
      throw new Error("Unauthorized, failed to verify");
    }
    const accessToken = generateAccessToken(user.id);
    res.json({ accessToken });
  });
});

module.exports = refreshAccessToken;
