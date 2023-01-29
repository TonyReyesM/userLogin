import styled from "styled-components";

//  hooks
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useCreatePost } from "./hooks/useCreatePost";

//  validations
import { postSchema } from "../../validations/postValidation";

//  styles
import {
  Input,
  TextAreaInput,
  Button,
  Title,
  Form,
  Question,
  Label,
  FieldAlert,
} from "../common/common.style";

const PostForm = styled(Form)`
  width: 40vw;
  max-width: 40rem;
`;

const PostQuestion = styled(Question)`
  flex-direction: column;
  row-gap: 1rem;
  width: 100%;
  align-items: flex-start;
`;

const PostCreator = ({ setPosts }) => {
  const createPost = useCreatePost();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(postSchema),
  });

  const onSubmit = async (data) => {
    const newPost = await createPost(data);
    setPosts((prevState) => [...prevState, newPost]);
  };

  return (
    <PostForm onSubmit={handleSubmit(onSubmit)}>
      <Title>Write a post!</Title>
      <PostQuestion>
        <Label htmlFor="title">Title</Label>
        <Input id="title" {...register("title")} style={{ maxWidth: "none" }} />
        {errors.title && <FieldAlert>{errors.title?.message}</FieldAlert>}
      </PostQuestion>
      <PostQuestion>
        <Label htmlFor="content">Content</Label>
        <TextAreaInput id="content" {...register("content")}></TextAreaInput>
        {errors.content && <FieldAlert>{errors.content?.message}</FieldAlert>}
      </PostQuestion>
      <Button type="submit">Publish</Button>
    </PostForm>
  );
};

export default PostCreator;
