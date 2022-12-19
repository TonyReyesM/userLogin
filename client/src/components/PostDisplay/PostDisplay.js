import styled from "styled-components";

//  styles
import { Title } from "../common/common.style";
import { palette } from "../common/palette";

const PostHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border-radius: 0.5rem;
  row-gap: 1.5rem;
  margin: 3rem;
  padding: 3rem;
  background-color: ${palette.typography.textLight};
  color: ${palette.typography.textDark};
  width: 40vw;
  max-width: 40rem;
`;

const PostTitle = styled(Title)`
  text-align: left;
`;

const PostContent = styled.p``;

const PostDisplay = ({ posts }) => {
  return (
    <>
      {posts &&
        posts.map((post) => {
          return (
            <PostHolder key={post._id}>
              <PostTitle>{post.title}</PostTitle>
              <PostContent>{post.content}</PostContent>
            </PostHolder>
          );
        })}
    </>
  );
};

export default PostDisplay;
