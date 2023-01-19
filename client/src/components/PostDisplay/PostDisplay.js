//  libraries
import styled from "styled-components";

//  assets
import { AlienProfile } from "../../assets";

//  styles
import {
  Title,
  AvatarImg,
  AvatarWrapper,
} from "../../components/common/common.style";
import { palette } from "../../components/common/palette";

const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  align-items: flex-start;
  padding: 1rem 0;
`;

const PostContent = styled.p``;

const PostUserInfo = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1rem;
`;

const avatarStyle = {
  position: "static",
  width: "2rem",
  height: "2rem",
};

const avatarWrapperStyle = {
  position: "static",
  width: "2rem",
  height: "2rem",
};

const PostDisplay = ({ post, postUser }) => {
  return (
    <PostWrapper>
      <Title style={{ color: palette.typography.textLight }}>
        {post.title}
      </Title>
      <PostUserInfo>
        <AvatarWrapper style={avatarWrapperStyle}>
          <AvatarImg src={postUser.photo || AlienProfile} style={avatarStyle} />
        </AvatarWrapper>
        <Title
          style={{ fontSize: "1rem", color: palette.typography.textLight }}
        >
          {postUser.username}
        </Title>
        <Title
          style={{ fontSize: "0.7rem", color: palette.typography.textLight }}
        >
          {post.createdAt}
        </Title>
      </PostUserInfo>
      <PostContent style={{ color: palette.typography.textLight }}>
        {post.content}
      </PostContent>
    </PostWrapper>
  );
};

export default PostDisplay;
