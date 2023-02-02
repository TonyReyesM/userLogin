import Comment from "../../models/comment";
import asyncHandler from "express-async-handler";

const createComment = asyncHandler(async (req, res) => {
  const { content, user, post } = req.body;

  if (!content || !user || !post) {
    res.status(400);
    throw new Error("Comment data incomplete");
  }

  const comment = await (
    await Comment.create({ content, user, post })
  ).populate("user");

  if (comment) {
    res.status(201).json({
      comment,
    });
  } else {
    res.status(400);
    throw new Error("Something went wrong");
  }
});

export default createComment;
