//  hooks
import { useGetUserPosts } from "../../components/PostDisplay/hooks/useGetUserPosts";

//  components
import PostCreator from "../../components/PostForm/PostCreator";
import PostDisplay from "../../components/PostDisplay/PostDisplay";

const Projects = () => {
  const { posts, setPosts } = useGetUserPosts();

  return (
    <>
      <PostCreator setPosts={setPosts} />
      <PostDisplay posts={posts} setPosts={setPosts} />
    </>
  );
};

export default Projects;
