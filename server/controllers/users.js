const User = require("../models/user");
const RefreshToken = require("../models/refreshToken");
const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// const imageMimeTypes = ["image/jpeg", "image/png", "image/gif"];

// Generate JWT

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "15m",
  });
};

// Generate refresh JWT

const generateRefreshToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_REFRESH, {
    expiresIn: "1d",
  });
};

// @desc    Register new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { email, firstName, lastName, password } = req.body;
  if (!firstName || !lastName || !password || !email) {
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
    firstName,
    lastName,
    password: hashedPassword,
    email,
  });

  if (user) {
    const accessToken = generateToken(user._id);
    const refreshToken = await RefreshToken.create({
      token: generateRefreshToken(user._id),
      user: user._id,
    });

    res.status(201).json({
      user: {
        _id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
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

// @desc    Authenticate a user
// @route   POST /api/users/login
// @access  Public

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  //  check email
  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    const accessToken = generateToken(user._id);
    const refreshToken = await RefreshToken.create({
      token: generateRefreshToken(user._id),
      user: user._id,
    });

    res.json({
      user,
      accessToken,
      refreshToken: refreshToken.token,
    });
  } else {
    res.status(400);
    throw new Error("Invalid credentials");
  }
});

// @desc    Logout user
// @route   DELETE /api/users/logout
// @access  Public

const logoutUser = asyncHandler(async (req, res) => {
  const token = req.body.token;
  await RefreshToken.deleteOne({ token });
  res.status(204).json({ message: "Refresh token deleted" });
});

// @desc    Create new access token
// @route   POST /api/users/token
// @access  Private

const refreshAccessToken = asyncHandler(async (req, res) => {
  const refreshToken = req.body.refreshToken;

  if (refreshToken === null) {
    res.status(403);
    throw new Error("Unauthorized, no refresh token");
  }
  const dbToken = await RefreshToken.findOne({ token: refreshToken });

  if (!dbToken) {
    res.status(401);
    throw new Error("Unauthorized, bad refresh token");
  }
  jwt.verify(refreshToken, process.env.JWT_REFRESH, (err, user) => {
    if (err) {
      res.status(403);
      throw new Error("Unauthorized, failed to verify");
    }
    console.log(user.id);
    const accessToken = generateToken({ id: user.id });
    res.json({ accessToken });
  });
});

// @desc    Get user data
// @route   GET /api/users/me
// @access  Private
const getUser = asyncHandler(async (req, res) => {
  const {
    _id,
    email,
    firstName,
    lastName,
    phoneNumber,
    about,
    city,
    state,
    address,
    country,
    photoURL,
  } = await User.findById(req.user.id);

  res.status(200).json({
    user: {
      id: _id,
      firstName,
      lastName,
      email,
      phoneNumber,
      country,
      about,
      city,
      state,
      address,
      photoURL,
    },
  });
});

// @desc    Update user data
// @route   POST /api/users/:id
// @access  Private

const updateUser = asyncHandler(async (req, res) => {
  const _id = req.params.id;
  console.log(_id);
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    address,
    country,
    state,
    city,
    about,
    photoURL,
  } = req.body.userData;

  console.log(state);

  console.log(req.body.userData);

  const user = await User.findOneAndUpdate(
    {
      _id,
    },
    {
      $set: {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNumber: phoneNumber,
        address: address,
        country: country,
        state: state,
        city: city,
        about: about,
        photoURL: photoURL,
      },
    },
    { returnOriginal: false }
  );

  console.log(user);

  res.status(200).json({
    message: "Updated user",
    user,
  });
});

// const getAllUsers = async (req, res) => {
//   res.status(200).json({ message: "Get user" });
// };

// const postUser = async (req, res) => {
//   res.status(200).json({ message: "Post user" });
// };

// const deleteUser = async (req, res) => {
//   res.status(200).json({ message: "Delete user" });
// };

module.exports = {
  loginUser,
  logoutUser,
  registerUser,
  getUser,
  updateUser,
  refreshAccessToken,
  // getAllUsers,
  // getUser,
  // postUser,
  // deleteUser,
};
