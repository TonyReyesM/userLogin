import styled from "styled-components";

//  hooks
import { useDeletePost } from "./hooks/useDeletePost";

//  assets
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

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

const PostButton = styled(Button)`
  background-color: ${palette.background.dark};
  color: white;
  padding: 0.6rem;
  border-radius: 5px;

  &:hover {
    background-color: rgba(200, 200, 200, 0.8);
    color: ${palette.typography.textDark};
  }
`;

const ButtonSection = styled.div`
  display: flex;
  column-gap: 1rem;
  width: 100%;
  justify-content: flex-end;
`;

const PostDisplay = ({ posts, setPosts }) => {
  const deletePost = useDeletePost();

  const handleDelete = (e) => {
    const id = e.target.id.split("-")[1];
    deletePost(id);
    setPosts(posts.filter((post) => post._id !== id));
  };

  const handleEdit = (e) => {
    const id = e.target.id.split("-")[1];
    console.log(id);
    // editPost(id);
  };

  return (
    <>
      {posts &&
        posts.map((post) => {
          return (
            <PostHolder key={post._id}>
              <PostTitle>{post.title}</PostTitle>
              <PostContent>{post.content}</PostContent>
              <ButtonSection>
                <PostButton
                  id={`edit-${post._id}`}
                  onClick={(e) => handleEdit(e)}
                >
                  <EditIcon style={{ pointerEvents: "none" }} />
                </PostButton>
                <PostButton
                  id={`delete-${post._id}`}
                  onClick={(e) => handleDelete(e)}
                >
                  <DeleteIcon style={{ pointerEvents: "none" }} />
                </PostButton>
              </ButtonSection>
            </PostHolder>
          );
        })}
    </>
  );
};

export default PostDisplay;
