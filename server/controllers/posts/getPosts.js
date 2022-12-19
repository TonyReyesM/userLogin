const Post = require("../../models/post");
const asyncHandler = require("express-async-handler");

const getPosts = asyncHandler(async (req, res) => {
  const id = req.params.id; //req.params.id ??
  console.log(id);

  const posts = await Post.find({ user: id });

  console.log(posts);

  res.json({
    posts,
  });
});

module.exports = getPosts;
