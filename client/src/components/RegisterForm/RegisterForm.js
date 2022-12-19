// components
import { Link } from "react-router-dom";

//  hooks
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useRegisterUser } from "./hooks/useRegisterUser";

//  validations
import { userRegisterSchema } from "../../validations/userRegisterValidation";

//  styles
import {
  Title,
  Form,
  Question,
  Label,
  Input,
  Button,
  CTA,
  FieldAlert,
} from "../common/common.style";
import { palette } from "../common/palette";

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
        <Label htmlFor="username">Username</Label>
        <Input id="username" {...register("username")} />
      </Question>
      {errors.username && <FieldAlert>{errors.username?.message}</FieldAlert>}
      <Question>
        <Label htmlFor="email">Email</Label>
        <Input id="email" {...register("email")} />
      </Question>
      {errors.email && <FieldAlert>{errors.email?.message}</FieldAlert>}
      <Question>
        <Label htmlFor="password">Password</Label>
        <Input type="password" id="password" {...register("password")} />
      </Question>
      {errors.password && <FieldAlert>{errors.password?.message}</FieldAlert>}
      <Question>
        <Label htmlFor="confirmPassword">Confirm password</Label>
        <Input
          type="password"
          id="confirmPassword"
          {...register("confirmPassword")}
        />
      </Question>
      {errors.confirmPassword && (
        <FieldAlert>{errors.confirmPassword?.message}</FieldAlert>
      )}
      <Button type="submit">Sign up</Button>
      <CTA>
        Already have an account?{" "}
        <Link to="/login" style={linkStyle}>
          Sign in
        </Link>
      </CTA>
    </Form>
  );
};

export default RegisterForm;
