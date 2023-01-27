import RefreshToken from "../../models/refreshToken";
import asyncHandler from "express-async-handler";

// @desc    Logout user
// @route   DELETE /api/users/logout
// @access  Public
const logoutUser = asyncHandler(async (req, res) => {
  const token = req.body.token;
  await RefreshToken.deleteOne({ token });
  res.status(204).json({ message: "Refresh token deleted" });
});

export default logoutUser;
