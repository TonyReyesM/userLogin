import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";

//  hooks
import { useForm } from "react-hook-form";
// import { useLocation } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";

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

//  validations
import { userLoginSchema } from "../validations/userLoginValidation";

const linkStyle = {
  color: palette.background.dark,
  fontWeight: "bold",
};

const LoginForm = () => {
  const login = useLogin();
  // const location = useLocation();
  // const from = location.state?.from?.pathname || null;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userLoginSchema),
  });

  const onSubmit = (userData) => {
    login(userData);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Title>User login</Title>
      <Question>
        <Label htmlFor="email">Email</Label>
        <Input id="email" {...register("email", { required: true })} />
      </Question>
      {errors.email && <FieldAlert>{errors?.email?.message}</FieldAlert>}
      <Question>
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          id="password"
          {...register("password", { required: true })}
        />
      </Question>
      {errors.password && <FieldAlert>{errors.password?.message}</FieldAlert>}
      <Button type="submit">Sign in</Button>
      <RegisterCTA>
        Not a user yet?{" "}
        <Link to="/register" style={linkStyle}>
          Register
        </Link>{" "}
        now!
      </RegisterCTA>
    </Form>
  );
};

export default LoginForm;
