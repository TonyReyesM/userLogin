import { yupResolver } from "@hookform/resolvers/yup";

//  hooks
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import useUpdateUser from "../hooks/useUpdateUser";
import useAuth from "../hooks/useAuth";
import useGetUser from "../hooks/useGetUser";

//  styles
import {
  Title,
  Form,
  Input,
  Question,
  Label,
  Button,
} from "./common/common.style";

//  validations
import { updateUserSchema } from "../validations/updateUserValidation";

const UpdateUserForm = () => {
  const [placeholders, setPlaceholders] = useState({});
  const [user, setUser] = useState();
  const updateUser = useUpdateUser();
  const getUser = useGetUser();
  const { auth, setAuth } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: placeholders.username,
      email: placeholders.email,
    },
    resolver: yupResolver(updateUserSchema),
  });

  //  Fix this
  useEffect(() => {
    (async () => {
      const currentUser = await getUser();
      setUser(currentUser);
      console.log(user);
      setPlaceholders({
        username: user?.username,
        email: user?.email,
      });
      console.log(placeholders);
      setAuth({ ...auth, user });
    })();
  }, []);

  const onSubmit = (userData) => {
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

export default UpdateUserForm;
