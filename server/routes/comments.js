const express = require("express");
const router = express.Router();

//  Controllers
const {
  createComment,
  editComment,
  deleteComment,
} = require("../controllers/comments");

//  Middleware
import { protect } from "../middleware/authMiddleware";

//  Routes

router.post("/create", protect, createComment);

router.put("/edit", protect, editComment);

router.delete("/delete", protect, deleteComment);

export default router;
