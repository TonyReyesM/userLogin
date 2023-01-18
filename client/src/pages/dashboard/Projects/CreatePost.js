import { useGetUserPosts } from "../../components/PostDisplay/hooks/useGetUserPosts";

//  components
import PostCreator from "../../../components/PostForm/PostCreator";

const Projects = () => {
  const { posts, setPosts } = useGetUserPosts();

  return <PostCreator setPosts={setPosts} />;
};

export default Projects;
