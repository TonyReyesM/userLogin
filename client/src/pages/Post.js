///  hooks
import { useGetPost } from "../hooks/useGetPost";

//  components
import PostDisplay from "../components/PostDisplay/PostDisplay";
import CommentsSection from "../components/CommentsSection/CommentsSection";
import CommentForm from "../components/CommentForm/CommentForm";

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
          <CommentForm />
        </>
      )}
    </>
  );
};

export default Post;
