import Post from "../../models/post";
import asyncHandler from "express-async-handler";

const getUserPosts = asyncHandler(async (req, res) => {
  const id = req.params.id;

  const posts = await Post.find({ user: id });

  res.json({
    posts,
  });
});

export default getUserPosts;
