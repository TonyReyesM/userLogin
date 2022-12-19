const RefreshToken = require("../../models/refreshToken");
const asyncHandler = require("express-async-handler");

// @desc    Logout user
// @route   DELETE /api/users/logout
// @access  Public
const logoutUser = asyncHandler(async (req, res) => {
  const token = req.body.token;
  await RefreshToken.deleteOne({ token });
  res.status(204).json({ message: "Refresh token deleted" });
});

module.exports = logoutUser;
