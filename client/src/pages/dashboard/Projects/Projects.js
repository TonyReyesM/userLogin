//  hooks
import { useGetUserPosts } from "../../../components/UserPostsDisplay/hooks/useGetUserPosts";

//  styles
import { Title } from "../../../components/common/common.style";
import { palette } from "../../../components/common/palette";

const Projects = () => {
  const { posts, setPosts } = useGetUserPosts();

  return (
    <Title style={{ color: palette.typography.textLight }}>Projects</Title>
  );
};

export default Projects;
