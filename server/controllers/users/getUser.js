import User from "../../models/user";
import asyncHandler from "express-async-handler";

// @desc    Get user data
// @route   GET /api/users/me
// @access  Private
const getUser = asyncHandler(async (req, res) => {
  const { _id, username, email, photo } = await User.findById(req.user.id);

  res.status(200).json({
    user: {
      _id,
      username,
      email,
      photo,
    },
  });
});

export default getUser;
