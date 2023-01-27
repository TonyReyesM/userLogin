const Post = require("../../models/post");
const User = require("../../models/user");
const asyncHandler = require("express-async-handler");
const user = require("../../models/user");

const getPost = asyncHandler(async (req, res) => {
  const _id = req.params.id;

  const post = await Post.findById({ _id });

  const user = await User.findById({ _id: post.user });

  res.json({
    post,
    user: {
      username: user.username,
      photo: user.photo,
    },
  });
});

module.exports = getPost;
