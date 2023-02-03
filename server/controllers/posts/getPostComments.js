import Comment from "../../models/comment";
import User from "../../models/user";
import asyncHandler from "express-async-handler";

const getPostComments = asyncHandler(async (req, res) => {
  const id = req.params.id;

  const comments = await Comment.find({ post: id }).populate("user");

  res.json({
    comments,
  });
});

export default getPostComments;
