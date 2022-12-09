const User = require("../../models/user");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");

// @desc    Update user password
// @route   PUT /api/users/password/:id
// @access  Private
const updateUserPassword = asyncHandler(async (req, res) => {
  // Retrieve information from request
  const _id = req.params.id;
  const { password, newPassword } = req.body;
  console.log(req.body);

  // Get user password
  const user = await User.findOne({ _id });
  console.log(user);

  //  Check if old password is valid
  if (await bcrypt.compare(password, user.password)) {
    //  Hash new password
    const salt = await bcrypt.genSalt(10);
    const newHashedPassword = await bcrypt.hash(newPassword, salt);

    //  Update user's password
    const user = await User.findOneAndUpdate(
      {
        _id,
      },
      {
        $set: {
          password: newHashedPassword,
        },
      },
      { returnOriginal: false }
    );

    res.status(200).json({
      message: "Updated user password",
    });
  } else {
    res.status(403);
    throw new Error("Invalid password");
  }
});

module.exports = updateUserPassword;
