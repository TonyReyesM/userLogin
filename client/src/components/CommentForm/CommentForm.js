//  libraries
import styled from "styled-components";

//  hooks
import { usePostComment } from "./hooks/usePostComment";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

//  validations
import { createCommentSchema } from "../../validations/createCommentValidation";

//  styles
import { TextAreaInput, Button, Form } from "../common/common.style";
import { palette } from "../common/palette";
import { usePost } from "../../hooks/usePost";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  padding: 0 2rem;
  margin: 1rem 0;
  width: 100%;
`;

const CommentForm = styled(Form)`
  border-width: 0;
  row-gap: 0;
  margin: 0;
  padding: 0;
  width: 100%;
  max-width: 100%;
  background-color: ${palette.background.light};
  margin-bottom: 2rem;
`;

const buttonStyle = {
  padding: "1rem",
};

const CommentWriter = () => {
  const { setComments } = usePost();
  const postComment = usePostComment();

  const { register, reset, handleSubmit } = useForm({
    resolver: yupResolver(createCommentSchema),
  });

  const onSubmit = async (data) => {
    const newComment = await postComment(data);
    setComments((prevState) => [...prevState, newComment]);
    reset();
  };

  return (
    <CommentForm onSubmit={handleSubmit(onSubmit)}>
      <Wrapper>
        <TextAreaInput
          id="content"
          placeholder="Write a comment"
          {...register("content")}
        />
        <Button style={buttonStyle} type="submit">
          Submit
        </Button>
      </Wrapper>
    </CommentForm>
  );
};

export default CommentWriter;
