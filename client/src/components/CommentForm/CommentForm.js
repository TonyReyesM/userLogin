//  libraries
import styled from "styled-components";

//  hooks
import { usePostComment } from "./hooks/usePostComment";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

//  validations
import { commentSchema } from "../../validations/commentValidation";

//  styles
import { TextAreaInput, Button } from "../common/common.style";
import { usePost } from "../../hooks/usePost";

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
  const { post, setComments, openEditor } = usePost();
  const postComment = usePostComment();

  const { register, reset, handleSubmit } = useForm({
    resolver: yupResolver(commentSchema),
  });

  const onSubmit = async (data) => {
    const newComment = await postComment(data);
    setComments((prevState) => [...prevState, newComment]);
    reset();
  };

  return (
    <>
      {openEditor.type === "none" && post && (
        <form style={{ width: "100%" }} onSubmit={handleSubmit(onSubmit)}>
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
        </form>
      )}
    </>
  );
};

export default CommentWriter;
