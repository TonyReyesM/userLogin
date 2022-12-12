const Post = require("../../models/post");
const asyncHandler = require("express-async-handler");

const updatePost = asyncHandler(async (req, res) => {
  const _id = req.params.id;
  const { title, body } = req.body;

  const post = await Post.findOneAndUpdate(
    {
      _id,
    },
    {
      $set: {
        title,
        body,
      },
    },
    { returnOriginal: false }
  );

  res.status(200).json({
    message: "Updated post",
    post,
  });
});

module.exports = updatePost;
