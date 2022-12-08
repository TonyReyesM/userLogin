const express = require("express");
const router = express.Router();

//  Controllers
const {
  loginUser,
  registerUser,
  getUser,
  updateUser,
  updateUserPassword,
  refreshAccessToken,
  logoutUser,
  deleteUser,
} = require("../controllers/users");

//  Middleware
const { protect } = require("../middleware/authMiddleware");

//  Routes
router.post("/register", registerUser);

router.post("/login", loginUser);

router.delete("/logout", logoutUser);

router.get("/me", protect, getUser);

router.put("/:id", protect, updateUser);

router.put("/password/:id", protect, updateUserPassword);

router.delete("/:id", protect, deleteUser);

router.post("/token", refreshAccessToken);

module.exports = router;
