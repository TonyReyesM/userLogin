import RefreshToken from "../../models/refreshToken";
import asyncHandler from "express-async-handler";

// @desc    Logout user
// @route   DELETE /api/users/logout
// @access  Public
const logoutUser = asyncHandler(async (req, res) => {
  const token = req.body.token;

  const refreshToken = await RefreshToken.findOne({ token });

  const _id = refreshToken._id;

  await RefreshToken.deleteOne({ _id });
  res.status(204).json({ message: "Refresh token deleted" });
});

export default logoutUser;
