const express = require("express");
const router = express.Router();
const fileUpload = require("express-fileupload");

//  Controllers
const {
  loginUser,
  registerUser,
  getUser,
  updateUser,
  refreshAccessToken,
  logoutUser,
  deleteUser,
} = require("../controllers/users");

const { protect } = require("../middleware/authMiddleware");

router.post("/register", registerUser);

router.post("/login", loginUser);

router.delete("/logout", logoutUser);

router.get("/me", protect, getUser);

router.put("/:id", protect, updateUser);

router.delete("/:id", protect, deleteUser);

router.post("/token", refreshAccessToken);

module.exports = router;
