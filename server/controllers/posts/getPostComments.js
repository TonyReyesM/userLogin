const Comment = require("../../models/comment");
const User = require("../../models/user");
const asyncHandler = require("express-async-handler");

const getPostComments = asyncHandler(async (req, res) => {
  const id = req.params.id;

  const postComments = await Comment.find({ post: id });

  // console.log(comments.toArray());

  const comments = postComments.map(async (comment) => {
    const user = await User.findById({ _id: comment.user });

    const commentWithUserInfo = {
      // ...comment.toObject(),
      _id: comment._id,
      content: comment.content,
      user: comment.user,
      username: user.username,
      userPhoto: user.photo,
      post: comment.post,
      createdAt: comment.createdAt,
      updatedAt: comment.updateAt,
    };
    // console.log(commentWithUserInfo);

    return commentWithUserInfo;
  });

  // console.log(comments);

  res.json({
    comments,
  });
});

module.exports = getPostComments;
