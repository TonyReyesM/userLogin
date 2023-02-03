import express from "express";
//  Controllers
import {
  getPost,
  getUserPosts,
  getFeedPosts,
  getPostComments,
  createPost,
  updatePost,
  deletePost,
} from "../controllers/posts";
//  Middleware
import { protect } from "../middleware/authMiddleware";

//  Routes
const router = express.Router();

router.get("/getPost/:id", getPost);
router.get("/getUserPosts/:id", protect, getUserPosts);
router.get("/getFeedPosts/:id", protect, getFeedPosts);
router.get("/getPostComments/:id", getPostComments);
router.post("/create", protect, createPost);
router.put("/update/:id", protect, updatePost);
router.delete("/delete/:id", protect, deletePost);

export default router;
