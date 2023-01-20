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
  background-color: ${palette.typography.textLight};
  color: ${palette.typography.textDark};
  padding: 2rem;
  margin: 1rem 0 2rem;
  border-radius: 0.5rem;
`;

const PostContent = styled.p`
  line-height: 1.3rem;
`;

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
      <Title>{post.title}</Title>
      <PostUserInfo>
        <AvatarWrapper style={avatarWrapperStyle}>
          <AvatarImg src={postUser.photo || AlienProfile} style={avatarStyle} />
        </AvatarWrapper>
        <Title style={{ fontSize: "1rem" }}>{postUser.username}</Title>
        <Title style={{ fontSize: "0.7rem" }}>{post.createdAt}</Title>
      </PostUserInfo>
      <PostContent>{post.content}</PostContent>
    </PostWrapper>
  );
};

export default PostDisplay;
