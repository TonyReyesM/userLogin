import styled from "styled-components";

//  hooks
import { useNavigate } from "react-router-dom";

//  components
import { Link } from "react-router-dom";

//  assets
import VisibilityIcon from "@mui/icons-material/Visibility";
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

const PostContent = styled.p`
  display: -webkit-box;
  overflow: hidden;
  white-space: normal;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

const ViewButton = styled(Button)`
  background-color: ${palette.background.dark};
  color: white;
  padding: 0.6rem;
  border-radius: 5px;
  align-items: center;
  column-gap: 5px;

  &:hover {
    background-color: rgba(200, 200, 200, 0.8);
    color: ${palette.typography.textDark};
  }
`;

// const ButtonSection = styled.div`
//   display: flex;
//   column-gap: 1rem;
//   width: 100%;
//   justify-content: flex-end;
// `;

const PostDisplay = ({ posts, setPosts }) => {
  const navigate = useNavigate();
  // const [isEditing, setIsEditing] = useState(false);

  // const editPost = useEditPost();
  // const deletePost = useDeletePost();

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm({
  //   resolver: yupResolver(createPostSchema),
  // });

  // const handleDelete = (e) => {
  //   const id = e.target.id.split("-")[1];
  //   deletePost(id);
  //   setPosts(posts.filter((post) => post._id !== id));
  // };

  // const onSubmit = async (data) => {
  //   console.log("Edit post!");
  //   console.log(data);
  //   const id = e.target.id.split("-")[1];
  //   console.log(id);
  //   editPost(id, postData);
  // };

  return (
    <>
      {posts &&
        posts.map((post) => {
          return (
            <PostHolder key={post._id}>
              <PostTitle>{post.title}</PostTitle>
              <PostContent>{post.content}</PostContent>
              <ViewButton onClick={() => navigate(`/post/${post._id}`)}>
                <VisibilityIcon style={{ pointerEvents: "none" }} /> View
              </ViewButton>
              {/* <ButtonSection>
                  <PostButton id={`edit-${post._id}`}>
                    <EditIcon style={{ pointerEvents: "none" }} />
                  </PostButton>
                  <PostButton id={`delete-${post._id}`}>
                    <DeleteIcon style={{ pointerEvents: "none" }} />
                  </PostButton>
                </ButtonSection> */}
            </PostHolder>
          );
        })}
    </>
  );
};

export default PostDisplay;
