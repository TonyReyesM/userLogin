import express from "express";
//  Controllers
import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
} from "../controllers/posts";
//  Middleware
import { protect } from "../middleware/authMiddleware";

//  Routes
const router = express.Router();

router.get("/get/:id", protect, getPosts);
router.post("/create", protect, createPost);
router.put("/update/:id", protect, updatePost);
router.delete("/delete/:id", protect, deletePost);

export default router;
