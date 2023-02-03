import User from "../../models/user";
import Post from "../../models/post";
import asyncHandler from "express-async-handler";

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

export default getPost;
