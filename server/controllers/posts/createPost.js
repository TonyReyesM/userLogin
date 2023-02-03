import Post from "../../models/post";
import asyncHandler from "express-async-handler";

const createPost = asyncHandler(async (req, res) => {
  const { title, content, user } = req.body;
  if (!title || !content || !user) {
    res.status(400);
    throw new Error("Post data incomplete");
  }

  const post = await Post.create({
    title,
    content,
    user,
  });

  if (post) {
    res.status(201).json({
      post,
    });
  } else {
    res.status(400);
    throw new Error("Something went wrong");
  }
});

export default createPost;
