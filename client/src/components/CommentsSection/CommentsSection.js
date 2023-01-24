//  libraries
import styled from "styled-components";

//  components
import CommentDisplay from "../CommentDisplay/CommentDisplay";

//  styles
import { Title } from "../common/common.style";
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

const CommentsSection = ({ comments }) => {
  return (
    <SectionWrapper>
      <Title style={{ color: palette.typography.textLight }}>
        Comments ({comments && comments.length})
      </Title>
      {comments &&
        comments.map((comment) => {
          return <CommentDisplay key={comment._id} comment={comment} />;
        })}
    </SectionWrapper>
  );
};

export default CommentsSection;
