// hooks
import { useGetFeedPosts } from "../../components/MultiplePostsDisplay/hooks/useGetFeedPosts";

//  components
import MultiplePostsDisplay from "../../components/MultiplePostsDisplay/MultiplePostsDisplay";

const Home = () => {
  const { feedPosts, setFeedPosts } = useGetFeedPosts();

  return <MultiplePostsDisplay posts={feedPosts} setPosts={setFeedPosts} />;
};

export default Home;
