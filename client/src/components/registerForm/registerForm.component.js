import { yupResolver } from "@hookform/resolvers/yup";

//  hooks
import { useForm } from "react-hook-form";
import useRegisterUser from "../../hooks/useRegisterUser";

//  styles
import {
  Title,
  Form,
  Question,
  Label,
  Input,
  Button,
} from "../common/common.style";

//  validations
import { userRegisterSchema } from "../../validations/userRegisterValidation";

export const RegisterForm = () => {
  const registerUser = useRegisterUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userRegisterSchema),
  });

  const onSubmit = (userData) => {
    registerUser(userData);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Title>Sign up now!</Title>
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
      <Question>
        <Label>Password</Label>
        <Input type="password" id="password" {...register("password")} />
        <p>{errors.password?.message}</p>
      </Question>
      <Question>
        <Label>Confirm password</Label>
        <Input
          type="password"
          id="confimPassword"
          {...register("confirmPassword")}
        />
        <p>{errors.confirmPassword?.message}</p>
      </Question>
      <Button type="submit">Sign up</Button>
    </Form>
  );
};
