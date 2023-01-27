// hooks
import { useState } from "react";
import { useGetFeedPosts } from "../../components/UserPostsDisplay/hooks/useGetFeedPosts";

//  styles
import { Title } from "../../components/common/common.style";
import { palette } from "../../components/common/palette";

const Home = () => {
  const { feedPosts, setFeedPosts } = useGetFeedPosts();
  console.log(feedPosts);

  return <Title style={{ color: palette.typography.textLight }}>Home</Title>;
};

export default Home;
