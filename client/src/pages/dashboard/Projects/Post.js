///  hooks
import { useGetPost } from "../../../hooks/useGetPost";

//  components
import PostDisplay from "../../../components/PostDisplay/PostDisplay";
import CommentsSection from "../../../components/CommentsSection/CommentsSection";
import CommentWriter from "../../../components/CommentWriter/CommentWriter";

const Post = () => {
  const { post, postUser } = useGetPost();
  console.log(post);
  console.log(postUser);

  return (
    <>
      {post && postUser && (
        <>
          <PostDisplay post={post} postUser={postUser} />
          <CommentsSection />
          <CommentWriter />
        </>
      )}
    </>
  );
};

export default Post;
