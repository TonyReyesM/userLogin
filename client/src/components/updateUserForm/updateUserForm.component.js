import { yupResolver } from "@hookform/resolvers/yup";

//  hooks
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import useUpdateUser from "../../hooks/useUpdateUser";
import useAuth from "../../hooks/useAuth";

//  styles
import {
  Title,
  Form,
  Input,
  Question,
  Label,
  Button,
} from "../common/common.style";

//  validations
import { updateUserSchema } from "../../validations/updateUserValidation";

export const UpdateUserForm = () => {
  const updateUser = useUpdateUser();
  const { auth } = useAuth();

  let user = auth.user;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    // defaultValues: {
    //   username: auth.user.username,
    //   email: auth.user.email,
    // },
    resolver: yupResolver(updateUserSchema),
  });

  useEffect(() => {
    user = auth.user;
  }, [auth]);

  const onSubmit = (userData) => {
    console.log(userData);
    updateUser(userData);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Title>Account</Title>
      <Question>
        <Label>Username</Label>
        <Input id="username" {...register("username")} />
        <p>{errors.username?.message}</p>
      </Question>
      <Question>
        <Label>Email</Label>
        <Input id="email" {...register("email")} />
        <p>{errors.email?.message}</p>
      </Question>
      <Button type="submit">Update</Button>
    </Form>
  );
};
