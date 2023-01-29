// hooks
import { useGetFeedPosts } from "../../components/UserPostsDisplay/hooks/useGetFeedPosts";

//  components
import MultiplePostsDisplay from "../../components/MultiplePostsDisplay/MultiplePostsDisplay";

const Home = () => {
  const { feedPosts, setFeedPosts } = useGetFeedPosts();
  console.log(feedPosts);

  return <MultiplePostsDisplay posts={feedPosts} setPosts={setFeedPosts} />;
};

export default Home;
