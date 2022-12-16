import styled from "styled-components";

//  hooks
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useCreatePost } from "./hooks/useCreatePost";

//  validations
import { createPostSchema } from "../../validations/createPostValidation";

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

const PostQuestion = styled(Question)`
  flex-direction: column;
  row-gap: 1rem;
  align-items: flex-start;
`;

const PostForm = () => {
  const createPost = useCreatePost();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(createPostSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
    createPost(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Title>Write a post!</Title>
      <PostQuestion>
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          {...register("title")}
          style={{ width: "100%" }}
        ></Input>
        {errors.title && <FieldAlert>{errors.title?.message}</FieldAlert>}
      </PostQuestion>
      <PostQuestion>
        <Label htmlFor="content">Content</Label>
        <TextAreaInput id="content" {...register("content")}></TextAreaInput>
        {errors.content && <FieldAlert>{errors.content?.message}</FieldAlert>}
      </PostQuestion>
      <Button type="submit">Publish</Button>
    </Form>
  );
};

export default PostForm;
