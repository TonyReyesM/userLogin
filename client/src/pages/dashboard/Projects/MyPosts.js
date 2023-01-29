// libraries
import styled from "styled-components";

//  hooks
import { useGetUserPosts } from "../../../components/UserPostsDisplay/hooks/useGetUserPosts";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";

//  assets
import AddIcon from "@mui/icons-material/Add";

//  components
import MultiplePostsDisplay from "../../../components/MultiplePostsDisplay/MultiplePostsDisplay";

//  styles
import { Button } from "../../../components/common/common.style";

const CreateButton = styled(Button)`
  column-gap: 5px;
  font-size: 1em;
  font-weight: bold;
  text-align: center;
  padding: 1rem;
  transition: 0.2s;
  width: fit-content;
  align-self: flex-end;
  align-items: center;
`;

const MyPosts = () => {
  const { posts, setPosts } = useGetUserPosts();
  const { auth } = useAuth();
  const navigate = useNavigate();

  return (
    <>
      <CreateButton
        onClick={() => navigate(`/dashboard/${auth.user._id}/create-post`)}
      >
        <AddIcon style={{ pointerEvents: "none" }} />
        Create Post
      </CreateButton>
      <MultiplePostsDisplay posts={posts} setPosts={setPosts} />
    </>
  );
};

export default MyPosts;
