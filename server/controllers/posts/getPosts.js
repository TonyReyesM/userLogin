const Post = require("../../models/post");
const asyncHandler = require("express-async-handler");

const getPosts = asyncHandler(async (req, res) => {
  const { _id } = req.body.user; //req.params.id ??

  const posts = await Post.find({ user: _id });

  console.log(posts);

  res.json({
    posts,
  });
});

module.exports = getPosts;
