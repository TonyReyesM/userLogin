//  libraries
import styled from "styled-components";

//  hooks
import { useGetPost } from "../../../hooks/useGetPost";

//  assets
import { AlienProfile } from "../../../assets";

//  styles
import {
  Title,
  AvatarImg,
  AvatarWrapper,
} from "../../../components/common/common.style";
import { palette } from "../../../components/common/palette";

const PostContent = styled.p``;

const avatarStyle = {
  position: "static",
  width: "2.5rem",
  height: "2.5rem",
};

const avatarWrapperStyle = {
  position: "static",
  width: "2.5rem",
  height: "2.5rem",
};
const Post = () => {
  const { post, postUser } = useGetPost();
  console.log(post);
  console.log(postUser);

  return (
    <>
      {post && (
        <>
          <Title style={{ color: palette.typography.textLight }}>
            {post.title}
          </Title>
          <AvatarWrapper style={avatarWrapperStyle}>
            <AvatarImg
              src={postUser.photo || AlienProfile}
              style={avatarStyle}
            />
          </AvatarWrapper>
          <Title
            style={{ fontSize: "1.5rem", color: palette.typography.textLight }}
          >
            {postUser.username}
          </Title>
          <PostContent style={{ color: palette.typography.textLight }}>
            {post.content}
          </PostContent>
        </>
      )}
    </>
  );
};

export default Post;
