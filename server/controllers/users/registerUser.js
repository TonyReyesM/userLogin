const User = require("../../models/user");
const RefreshToken = require("../../models/refreshToken");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");

//  utils
const generateAccessToken = require("../../utils/generateAccessToken");
const generateRefreshToken = require("../../utils/generateRefreshToken");

// @desc    Register new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { email, username, password } = req.body;
  if (!username || !password || !email) {
    res.status(400);
    throw new Error("Please add all required fields");
  }

  //  check if user exists
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  //  hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // create user
  const user = await User.create({
    username,
    password: hashedPassword,
    email,
  });

  if (user) {
    const accessToken = generateAccessToken(user._id);
    const refreshToken = await RefreshToken.create({
      token: generateRefreshToken(user._id),
      user: user._id,
    });

    res.status(201).json({
      user: {
        _id: user.id,
        username: user.username,
        email: user.email,
      },
      accessToken,
      refreshToken: refreshToken.token,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

module.exports = registerUser;
