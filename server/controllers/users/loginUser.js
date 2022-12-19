const User = require("../../models/user");
const RefreshToken = require("../../models/refreshToken");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");

//  utils
const generateAccessToken = require("../../utils/generateAccessToken");
const generateRefreshToken = require("../../utils/generateRefreshToken");

// @desc    Authenticate a user
// @route   POST /api/users/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  //  check email
  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    const accessToken = generateAccessToken(user._id);
    const refreshToken = await RefreshToken.create({
      token: generateRefreshToken(user._id),
      user: user._id,
    });

    res.json({
      user: {
        _id: user._id,
        username: user.username,
        email: user.email,
        photo: user.photo,
      },
      accessToken,
      refreshToken: refreshToken.token,
    });
  } else {
    res.status(400);
    throw new Error("Invalid credentials");
  }
});

module.exports = loginUser;
