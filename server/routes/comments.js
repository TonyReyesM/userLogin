const express = require("express");
const router = express.Router();

//  Controllers
const {
  createComment,
  editComment,
  deleteComment,
} = require("../controllers/comments");

//  Routes

router.post("/create", createComment);

router.put("/edit", editComment);

router.delete("/delete", deleteComment);

module.exports = router;
