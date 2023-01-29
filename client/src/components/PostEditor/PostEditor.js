//  libraries
import styled from "styled-components";

//  hooks
import { useForm } from "react-hook-form";
import { usePost } from "../../hooks/usePost";
import { yupResolver } from "@hookform/resolvers/yup";

//  validations
import { postSchema } from "../../validations/postValidation";

//  styles
import { Input, TextAreaInput, Button } from "../common/common.style";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;
  width: 100%;
`;

const TitleInput = styled(Input)`
  font-size: 2rem;
  font-weight: bold;
  align-self: flex-start;

  &:hover {
    background-color: #dddddd;
  }

  &:focus {
    cursor: pointer;
  }
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

const PostEditor = ({ post, setIsEditing }) => {
  const { setOpenEditor } = usePost();

  const { register, handleSubmit } = useForm({
    defaultValues: {
      title: post.title,
      content: post.content,
    },
    resolver: yupResolver(postSchema),
  });

  const closeEditor = () => {
    setIsEditing(false);
    setOpenEditor({
      isEditing: false,
      type: "none",
    });
  };

  const onSubmit = async (newPost) => {
    setIsEditing(false);
    setOpenEditor({
      isEditing: false,
      type: "none",
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
      <Wrapper>
        <TitleInput id="title" readOnly={true} {...register("title")} />
        <TextAreaInput id="content" {...register("content")} />
        <ButtonSection>
          <CancelButton onClick={closeEditor}>Cancel</CancelButton>
          <SubmitButton>Submit</SubmitButton>
        </ButtonSection>
      </Wrapper>
    </form>
  );
};

export default PostEditor;
