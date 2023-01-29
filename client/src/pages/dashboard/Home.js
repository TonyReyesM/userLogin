// hooks
import { useGetFeedPosts } from "../../components/UserPostsDisplay/hooks/useGetFeedPosts";

//  components
import UserPostsDisplay from "../../components/UserPostsDisplay/UserPostsDisplay";

//  styles
import { Title } from "../../components/common/common.style";
import { palette } from "../../components/common/palette";

const Home = () => {
  const { feedPosts, setFeedPosts } = useGetFeedPosts();
  console.log(feedPosts);

  return <UserPostsDisplay posts={feedPosts} setPosts={setFeedPosts} />;
};

export default Home;
