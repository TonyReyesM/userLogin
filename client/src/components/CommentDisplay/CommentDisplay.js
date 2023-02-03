//  libraries
import styled from "styled-components";

//  hooks
import { useState } from "react";

//  components
import CommentDropdown from "../CommentDropdown/CommentDropdown";
import CommentEditor from "../CommentEditor/CommentEditor";

//  styles
import { AvatarImg, AvatarWrapper } from "../common/common.style";
import { palette } from "../common/palette";

const CommentWrapper = styled.div`
  display: flex;
  column-gap: 2rem;
  justify-content: space-between;
  align-items: flex-start;
  background-color: ${palette.typography.textLight};
  padding: 2rem;
  margin: 1rem 0 2rem;
  border-radius: 0.5rem;
  width: 100%;
`;

const Comment = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  row-gap: 1rem;
  color: ${palette.typography.textDark};
`;

const CommentUser = styled.div`
  font-weight: bold;
`;

const CommentContent = styled.p`
  overflow-wrap: break-word;
  word-break: break-all;
`;

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

const CommentDisplay = ({ comment }) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <CommentWrapper>
      <AvatarWrapper style={avatarWrapperStyle}>
        <AvatarImg style={avatarStyle} src={comment.user.photo} />
      </AvatarWrapper>
      <Comment>
        <CommentUser>{comment.user.username}</CommentUser>
        {!isEditing ? (
          <CommentContent>{comment.content}</CommentContent>
        ) : (
          <CommentEditor comment={comment} setIsEditing={setIsEditing} />
        )}
      </Comment>
      <CommentDropdown comment={comment} setIsEditing={setIsEditing} />
    </CommentWrapper>
  );
};

export default CommentDisplay;
