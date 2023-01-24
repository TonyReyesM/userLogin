const Comment = require("../../models/comment");
const asyncHandler = require("express-async-handler");

const createComment = asyncHandler(async (req, res) => {
  const { content, user, post } = req.body;

  if (!content || !user || !post) {
    res.status(400);
    throw new Error("Comment data incomplete");
  }

  const comment = await Comment.create({ content, user, post });

  if (comment) {
    res.status(201).json({
      comment,
    });
  } else {
    res.status(400);
    throw new Error("Something went wrong");
  }
});

module.exports = createComment;
