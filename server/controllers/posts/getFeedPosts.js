import Post from "../../models/post";
import asyncHandler from "express-async-handler";

const getFeedPosts = asyncHandler(async (req, res) => {
  const id = req.params.id;

  const posts = await Post.find({});

  res.json({
    posts,
  });
});

export default getFeedPosts;
