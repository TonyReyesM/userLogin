//  hooks
import { useGetUserPosts } from "../../../components/MultiplePostsDisplay/hooks/useGetUserPosts";

//  components
import PostCreator from "../../../components/PostForm/PostCreator";

const CreatePost = () => {
  const { setPosts } = useGetUserPosts();

  return <PostCreator setPosts={setPosts} />;
};

export default CreatePost;
