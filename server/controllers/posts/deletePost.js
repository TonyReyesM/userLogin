const Post = require("../../models/post");
const asyncHandler = require("express-async-handler");

const deletePost = asyncHandler(async (req, res) => {
  const _id = req.params.id;

  const post = await Post.deleteOne({ _id });

  res.status(200).json({
    message: "Deleted post",
    post,
  });
});

module.exports = deletePost;
