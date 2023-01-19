const Comment = require("../../models/comment");
const asyncHandler = require("express-async-handler");

const getPostComments = asyncHandler(async (req, res) => {
  const id = req.params.id;

  const comments = await Comment.find({ post: id });

  res.json({
    comments,
  });
});

module.exports = getPostComments;
