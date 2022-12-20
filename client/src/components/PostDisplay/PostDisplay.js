import styled from "styled-components";

//  hooks
import { useDeletePost } from "./hooks/useDeletePost";

//  assets
import DeleteIcon from "@mui/icons-material/Delete";

//  styles
import { Title, Button } from "../common/common.style";
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

const DeleteButton = styled(Button)`
  background-color: ${palette.background.dark};
  color: white;
  padding: 3% 3%;

  &:hover {
    background-color: rgba(200, 200, 200, 0.8);
    color: ${palette.typography.textDark};
  }
`;

const PostDisplay = ({ posts, setPosts }) => {
  const deletePost = useDeletePost();

  const handleClick = (e) => {
    const id = e.target.id;
    deletePost(id);
    setPosts(posts.filter((post) => post._id !== id));
  };

  return (
    <>
      {posts &&
        posts.map((post) => {
          return (
            <PostHolder key={post._id}>
              <PostTitle>{post.title}</PostTitle>
              <PostContent>{post.content}</PostContent>
              <DeleteButton id={post._id} onClick={(e) => handleClick(e)}>
                <DeleteIcon style={{ pointerEvents: "none" }} />
              </DeleteButton>
            </PostHolder>
          );
        })}
    </>
  );
};

export default PostDisplay;
