const Comment = require("../../models/comment");
const asyncHandler = require("express-async-handler");

const deleteComment = asyncHandler(async (req, res) => {
  const { _id, user } = req.body;

  const commentToDelete = await Comment.findById({ _id });

  if (commentToDelete.user.valueOf() !== user) {
    res.status(403);
    throw new Error("User not authorized");
  }

  const comment = await Comment.deleteOne({ _id });

  res.status(200).json({
    message: "Deleted comment",
    comment,
  });
});

module.exports = deleteComment;
