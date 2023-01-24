//  libraries
import styled from "styled-components";

//  hooks
import { useGetPost } from "../hooks/useGetPost";
import { useGetPostComments } from "../components/CommentsSection/hooks/useGetPostComments";

//  components
import PostDisplay from "../components/PostDisplay/PostDisplay";
import CommentsSection from "../components/CommentsSection/CommentsSection";
import CommentForm from "../components/CommentForm/CommentForm";

//  styles
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 85vw;
`;

const Post = () => {
  const { post, postUser } = useGetPost();
  const { comments, setComments } = useGetPostComments();

  return (
    <>
      {post && postUser && comments && (
        <Wrapper>
          <PostDisplay post={post} postUser={postUser} />
          <CommentsSection comments={comments} />
          <CommentForm setComments={setComments} />
        </Wrapper>
      )}
    </>
  );
};

export default Post;
