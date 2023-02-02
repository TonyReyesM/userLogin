import Comment from "../../models/comment";
import asyncHandler from "express-async-handler";

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

export default deleteComment;
