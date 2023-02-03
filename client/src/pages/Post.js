//  libraries
import styled from "styled-components";

//  contexts
import { PostProvider } from "../contexts/PostProvider";

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
  return (
    <PostProvider>
      <Wrapper>
        <PostDisplay />
        <CommentsSection />
        <CommentForm />
      </Wrapper>
    </PostProvider>
  );
};

export default Post;
