//  libraries
import styled from "styled-components";

//  hooks
import { useForm } from "react-hook-form";
import { useEditComment } from "./hooks/useEditComment";
import { usePost } from "../../hooks/usePost";
import { yupResolver } from "@hookform/resolvers/yup";

//  validations
import { commentSchema } from "../../validations/commentValidation";

//  styles
import { TextAreaInput, Button } from "../common/common.style";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;
`;

const ButtonSection = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  column-gap: 20px;
`;

const SubmitButton = styled(Button)`
  padding: 1rem;
`;

const CancelButton = styled(Button)`
  background-color: #4e0707;
  padding: 1rem;
`;

const CommentEditor = ({ comment, setIsEditing }) => {
  const { comments, setComments } = usePost();
  const editComment = useEditComment();

  const { register, handleSubmit } = useForm({
    defaultValues: {
      content: comment.content,
    },
    resolver: yupResolver(commentSchema),
  });

  const closeEditor = () => {
    setIsEditing(false);
  };

  const onSubmit = async (newComment) => {
    const editedComment = await editComment(comment._id, newComment.content);
    const index = comments.indexOf(comment);
    const newComments = [
      ...comments.slice(0, index),
      editedComment,
      ...comments.slice(index + 1),
    ];
    setComments(newComments);
    setIsEditing(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Wrapper>
        <TextAreaInput id="content" {...register("content")} />
        <ButtonSection>
          <CancelButton onClick={closeEditor}>Cancel</CancelButton>
          <SubmitButton>Submit</SubmitButton>
        </ButtonSection>
      </Wrapper>
    </form>
  );
};

export default CommentEditor;
