//  libraries
import styled from "styled-components";

//  hooks
import { useGetPostComments } from "./hooks/useGetPostComments";

//  assets
import { AlienProfile } from "../../assets";

//  styles
import { Title, AvatarImg, AvatarWrapper } from "../common/common.style";
import { palette } from "../common/palette";

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  row-gap: 2rem;
  padding: 2rem;
  border-top-style: solid;
  border-width: 1px;
  border-color: ${palette.typography.textLight};
`;

const CommentWrapper = styled.div`
  display: flex;
  column-gap: 2rem;
  align-items: flex-start;
  background-color: ${palette.typography.textLight};
  padding: 2rem;
  margin: 1rem 0 2rem;
  border-radius: 0.5rem;
  width: 100%;
`;

const Comment = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  color: ${palette.typography.textDark};
`;

const CommentUser = styled.div`
  font-weight: bold;
`;

const CommentContent = styled.div``;

const avatarStyle = {
  position: "static",
  width: "3rem",
  height: "3rem",
};

const avatarWrapperStyle = {
  position: "static",
  width: "3rem",
  height: "3rem",
};

const CommentsSection = () => {
  const comments = useGetPostComments();
  console.log(comments);
  return (
    <SectionWrapper>
      <Title style={{ color: palette.typography.textLight }}>
        Comments ({comments && comments.length})
      </Title>
      {comments &&
        comments.map((comment) => {
          return (
            <CommentWrapper key={comment._id}>
              <AvatarWrapper style={avatarWrapperStyle}>
                <AvatarImg style={avatarStyle} src={comment.user.photo} />
              </AvatarWrapper>
              <Comment>
                <CommentUser>{comment.user.username}</CommentUser>
                <CommentContent>{comment.content}</CommentContent>
              </Comment>
            </CommentWrapper>
          );
        })}
    </SectionWrapper>
  );
};

export default CommentsSection;
