import { yupResolver } from "@hookform/resolvers/yup";

//  hooks
import { useForm } from "react-hook-form";
import useUpdateUser from "../hooks/useUpdateUser";
import useAuth from "../hooks/useAuth";

//  styles
import {
  Title,
  Form,
  Input,
  Question,
  Label,
  Button,
  FieldAlert,
} from "./common/common.style";

//  validations
import { updateUserSchema } from "../validations/updateUserValidation";

const UpdateUserForm = () => {
  const updateUser = useUpdateUser();
  const { auth } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: auth.user.username,
      email: auth.user.email,
    },
    resolver: yupResolver(updateUserSchema),
  });

  const onSubmit = (userData) => {
    updateUser(userData);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Title>Account</Title>

      <Input type="image" />

      <Question>
        <Label>Username</Label>
        <Input id="username" {...register("username")} />
      </Question>
      {errors.username && <FieldAlert>{errors.username?.message}</FieldAlert>}
      <Question>
        <Label>Email</Label>
        <Input id="email" {...register("email")} />
      </Question>
      {errors.email && <FieldAlert>{errors.email?.message}</FieldAlert>}
      <Button type="submit">Update</Button>
    </Form>
  );
};

export default UpdateUserForm;
