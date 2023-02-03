import express from "express";
//  Controllers
import {
  registerUser,
  loginUser,
  logoutUser,
  getUser,
  getUsers,
  updateUser,
  deleteUser,
  updateUserPassword,
  refreshAccessToken,
  followUser,
} from "../controllers/users";
//  Middleware
import { protect } from "../middleware/authMiddleware";

//  Routes
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.delete("/logout", logoutUser);
router.get("/me", protect, getUser);
router.get("/getUsers/:query", protect, getUsers);
router.put("/:id", protect, updateUser);
router.put("/password/:id", protect, updateUserPassword);
router.delete("/:id", protect, deleteUser);
router.post("/token", refreshAccessToken);

// Follow interaction
router.post("/follow/:id", protect, followUser);

export default router;
