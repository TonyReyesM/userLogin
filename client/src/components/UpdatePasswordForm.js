import { yupResolver } from "@hookform/resolvers/yup";

//  hooks
import { useForm } from "react-hook-form";
import { useAuth } from "../hooks/useAuth";
import { useUpdatePassword } from "../hooks/useUpdatePassword";

//  validations
import { updatePasswordSchema } from "../validations/updatePasswordValidation";

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

const UpdatePasswordForm = () => {
  const { auth } = useAuth();
  const updatePassword = useUpdatePassword();

  // react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(updatePasswordSchema),
  });

  const onSubmit = (data) => {
    updatePassword(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Title>Change password</Title>
      <Question>
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" {...register("password")} />
        {errors.password && <FieldAlert>{errors.password?.message}</FieldAlert>}
      </Question>
      <Question>
        <Label htmlFor="newPassword">New password</Label>
        <Input id="newPassword" type="password" {...register("newPassword")} />
        {errors.newPassword && (
          <FieldAlert>{errors.newPassword?.message}</FieldAlert>
        )}
      </Question>
      <Question>
        <Label htmlFor="confirmNewPassword">Confirm new password</Label>
        <Input
          id="confirmNewPassword"
          type="password"
          {...register("confirmNewPassword")}
        />
        {errors.confirmNewPassword && (
          <FieldAlert>{errors.confirmNewPassword?.message}</FieldAlert>
        )}
      </Question>
      <Button type="submit">Change password</Button>
    </Form>
  );
};

export default UpdatePasswordForm;
