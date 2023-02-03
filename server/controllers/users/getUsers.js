import User from "../../models/user";
import asyncHandler from "express-async-handler";

// @desc    Get user data
// @route   GET /api/users/me
// @access  Private
const getUsers = asyncHandler(async (req, res) => {
  const query = req.params.query;

  const users = await User.find();

  res.status(200).json({
    users,
  });
});

export default getUsers;
