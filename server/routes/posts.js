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
router.get("/get", getPosts);

router.post("/create", createPost);

router.put("/update", updatePost);

router.delete("/delete", deletePost);

module.exports = router;
