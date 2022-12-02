// components
import { Link } from "react-router-dom";

//  hooks
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import useRegisterUser from "../hooks/useRegisterUser";

//  validations
import { userRegisterSchema } from "../validations/userRegisterValidation";

//  styles
import {
  Title,
  Form,
  Question,
  Label,
  Input,
  Button,
  RegisterCTA,
  FieldAlert,
} from "./common/common.style";
import { palette } from "./common/palette";

const linkStyle = {
  color: palette.background.dark,
  fontWeight: "bold",
};

const RegisterForm = () => {
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
      </Question>
      {errors.username && <FieldAlert>{errors.username?.message}</FieldAlert>}
      <Question>
        <Label>Email</Label>
        <Input id="email" {...register("email")} />
      </Question>
      {errors.email && <FieldAlert>{errors.email?.message}</FieldAlert>}
      <Question>
        <Label>Password</Label>
        <Input type="password" id="password" {...register("password")} />
      </Question>
      {errors.password && <FieldAlert>{errors.password?.message}</FieldAlert>}
      <Question>
        <Label>Confirm password</Label>
        <Input
          type="password"
          id="confimPassword"
          {...register("confirmPassword")}
        />
      </Question>
      {errors.confirmPassword && (
        <FieldAlert>{errors.confirmPassword?.message}</FieldAlert>
      )}
      <Button type="submit">Sign up</Button>
      <RegisterCTA>
        Already have an account?{" "}
        <Link to="/login" style={linkStyle}>
          Sign in
        </Link>
      </RegisterCTA>
    </Form>
  );
};

export default RegisterForm;
