const User = require("../../models/user");
const asyncHandler = require("express-async-handler");

// @desc    Update user data
// @route   POST /api/users/:id
// @access  Private
const updateUser = asyncHandler(async (req, res) => {
  const _id = req.params.id;
  const { username, email, photo } = req.body;

  const user = await User.findOneAndUpdate(
    {
      _id,
    },
    {
      $set: {
        username: username,
        email: email,
        photo: photo,
      },
    },
    { returnOriginal: false }
  );

  res.status(200).json({
    message: "Updated user",
    user: {
      _id,
      username,
      email,
      photo,
    },
  });
});

module.exports = updateUser;
