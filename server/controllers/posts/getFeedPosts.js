const Post = require("../../models/post");
const asyncHandler = require("express-async-handler");

const getFeedPosts = asyncHandler(async (req, res) => {
  const id = req.params.id;

  const posts = await Post.find({});

  res.json({
    posts,
  });
});

module.exports = getFeedPosts;
