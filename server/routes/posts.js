const express = require("express");
const router = express.Router();

//  Controllers
const {
  getPosts,
  createPost,
  updatePost,
  deletePost,
} = require("../controllers/posts");

//  Middleware
const { protect } = require("../middleware/authMiddleware");

//  Routes
router.get("/get/:id", protect, getPosts);

router.post("/create", protect, createPost);

router.put("/update/:id", protect, updatePost);

router.delete("/delete/:id", protect, deletePost);

module.exports = router;
