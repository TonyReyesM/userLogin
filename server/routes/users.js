const express = require("express");
const router = express.Router();

//  Controllers
const {
  loginUser,
  registerUser,
  getUser,
  updateUser,
  refreshAccessToken,
  logoutUser,
  // getAllUsers,
  // getUser,
  // postUser,
  // deleteUser,
} = require("../controllers/users");

const { protect } = require("../middleware/authMiddleware");

router.post("/register", registerUser);

router.post("/login", loginUser);

router.delete("/logout", logoutUser);

router.get("/me", protect, getUser);

router.put("/:id", protect, updateUser);

router.post("/token", refreshAccessToken);

// router.get("/", getAllUsers);

// router.get("/:id", getUser);

// router.post("/", postUser);

// router.delete("/:id", deleteUser);

module.exports = router;
