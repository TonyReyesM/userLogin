const Comment = require("../../models/comment");
const asyncHandler = require("express-async-handler");

const createComment = asyncHandler(async (req, res) => {
  console.log(req.body);
  const { content, user, post } = req.body;

  console.log(content);
  console.log(user);
  console.log(post);

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
