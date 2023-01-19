//  libraries
import styled from "styled-components";

//  styles
import { TextAreaInput, Button } from "../common/common.style";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  margin: 1rem 0;
  width: 100%;
`;

const buttonStyle = {
  padding: "1rem",
};

const CommentWriter = () => {
  return (
    <Wrapper>
      <TextAreaInput />
      <Button style={buttonStyle}>Submit</Button>
    </Wrapper>
  );
};

export default CommentWriter;
