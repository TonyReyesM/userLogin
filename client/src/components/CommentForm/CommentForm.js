//  libraries
import styled from "styled-components";

//  hooks
import { usePostComment } from "./hooks/usePostComment";

//  styles
import { TextAreaInput, Button } from "../common/common.style";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  padding: 0 2rem;
  margin: 1rem 0;
  width: 100%;
`;

const buttonStyle = {
  padding: "1rem",
};

const CommentWriter = () => {
  return (
    <Wrapper>
      <TextAreaInput placeholder="Write a comment" />
      <Button style={buttonStyle}>Submit</Button>
    </Wrapper>
  );
};

export default CommentWriter;
