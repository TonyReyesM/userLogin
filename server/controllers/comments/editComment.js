import Comment from "../../models/comment";
import asyncHandler from "express-async-handler";

const editComment = asyncHandler(async (req, res) => {
  const { _id, content, user } = req.body;

  const oldComment = await Comment.findById({ _id });

  if (oldComment.user.valueOf() !== user) {
    res.status(403);
    throw new Error("User not authorized");
  }

  const comment = await Comment.findOneAndUpdate(
    {
      _id,
    },
    {
      $set: {
        content,
      },
    },
    { returnOriginal: false }
  ).populate("user");

  res.status(200).json({
    message: "Updated comment",
    comment,
  });
});

export default editComment;
