const express = require("express");
const router = express.Router();

//  Controllers
const {
  registerUser,
  loginUser,
  logoutUser,
  getUser,
  updateUser,
  deleteUser,
  updateUserPassword,
  refreshAccessToken,
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
