//  hooks
import { useGetUserPosts } from "../../../components/UserPostsDisplay/hooks/useGetUserPosts";

//  components
import PostCreator from "../../../components/PostForm/PostCreator";
import UserPostsDisplay from "../../../components/UserPostsDisplay/UserPostsDisplay";

const MyPosts = () => {
  const { posts, setPosts } = useGetUserPosts();

  return (
    <>
      <PostCreator setPosts={setPosts} />
      <UserPostsDisplay posts={posts} setPosts={setPosts} />
    </>
  );
};

export default MyPosts;
