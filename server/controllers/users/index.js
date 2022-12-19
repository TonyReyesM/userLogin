//  Import not working here
// import { registerUser } from "./registerUser";
// import { loginUser } from "./loginUser";
// import { logoutUser } from "./logoutUser";
// import { getUser } from "./getUser";
// import { updateUser } from "./updateUser";
// import { updateUserPassword } from "./updateUserPassword";
// import { deleteUser } from "./deleteUser";
// import { refreshAccessToken } from "./refreshAccessToken";

const registerUser = require("./registerUser");
const loginUser = require("./loginUser");
const logoutUser = require("./logoutUser");
const getUser = require("./getUser");
const updateUser = require("./updateUser");
const deleteUser = require("./deleteUser");
const updateUserPassword = require("./updateUserPassword");
const refreshAccessToken = require("./refreshAccessToken");

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
  getUser,
  updateUser,
  deleteUser,
  updateUserPassword,
  refreshAccessToken,
};
