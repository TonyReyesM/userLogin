import Post from "../../models/post";
import asyncHandler from "express-async-handler";

const updatePost = asyncHandler(async (req, res) => {
  const _id = req.params.id;
  const { title, content } = req.body;

  console.log(_id);
  console.log(title);
  console.log(content);

  const post = await Post.findOneAndUpdate(
    {
      _id,
    },
    {
      $set: {
        title,
        content,
      },
    },
    { returnOriginal: false }
  );

  res.status(200).json({
    message: "Updated post",
    post,
  });
});

export default updatePost;
