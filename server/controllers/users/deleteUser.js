import User from "../../models/user";
import asyncHandler from "express-async-handler";

// @desc    Delete user
// @route   DELETE /api/users/:id
// @access  Private
const deleteUser = asyncHandler(async (req, res) => {
  const _id = req.params.id;

  const user = await User.deleteOne({ _id });

  res.status(200).json({
    messsage: "Deleted user",
    user,
  });
});

export default deleteUser;
