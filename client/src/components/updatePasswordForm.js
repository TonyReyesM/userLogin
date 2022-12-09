import { yupResolver } from "@hookform/resolvers/yup";

//  hooks
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";

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

  // react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(updatePasswordSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Title>Change password</Title>
      <Question>
        <Label htmlFor="password">Password</Label>
        <Input id="password" {...register("password")} />
        {errors.password && <FieldAlert>{errors.password?.message}</FieldAlert>}
      </Question>
      <Question>
        <Label htmlFor="newPassword">New password</Label>
        <Input id="newPassword" {...register("newPassword")} />
        {errors.newPassword && (
          <FieldAlert>{errors.newPassword?.message}</FieldAlert>
        )}
      </Question>
      <Question>
        <Label htmlFor="confirmNewPassword">Confirm new password</Label>
        <Input id="confirmNewPassword" {...register("confirmNewPassword")} />
        {errors.confirmNewPassword && (
          <FieldAlert>{errors.confirmNewPassword?.message}</FieldAlert>
        )}
      </Question>
      <Button type="submit">Change password</Button>
    </Form>
  );
};

export default UpdatePasswordForm;
