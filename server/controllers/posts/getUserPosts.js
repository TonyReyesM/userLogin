const Post = require("../../models/post");
const asyncHandler = require("express-async-handler");

const getUserPosts = asyncHandler(async (req, res) => {
  const id = req.params.id;

  const posts = await Post.find({ user: id });

  res.json({
    posts,
  });
});

module.exports = getUserPosts;
