//  libraries
import styled from "styled-components";

//  hooks
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { usePostComment } from "./hooks/usePostComment";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

//  validations
import { createCommentSchema } from "../../validations/createCommentValidation";

//  styles
import { TextAreaInput, Button, Form } from "../common/common.style";
import { palette } from "../common/palette";

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

const CommentWriter = ({ setComments }) => {
  const [inputValue, setInputValue] = useState("");
  const postComment = usePostComment();
  const location = useLocation();

  const postID = location.pathname.split("/").slice(-1)[0];

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(createCommentSchema),
  });

  const onSubmit = async (data) => {
    const newComment = await postComment(data, postID);
    setComments((prevState) => [...prevState, newComment]);
    setInputValue("");
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <CommentForm onSubmit={handleSubmit(onSubmit)}>
      <Wrapper>
        <TextAreaInput
          id="content"
          placeholder="Write a comment"
          value={inputValue}
          onChange={(e) => handleChange(e)}
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
