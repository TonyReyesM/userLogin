//  libraries
import styled from "styled-components";

//  hooks
import { useGetPost } from "../hooks/useGetPost";

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
  // console.log(post);
  // console.log(postUser);

  return (
    <>
      {post && postUser && (
        <Wrapper>
          <PostDisplay post={post} postUser={postUser} />
          <CommentsSection />
          <CommentForm />
        </Wrapper>
      )}
    </>
  );
};

export default Post;
