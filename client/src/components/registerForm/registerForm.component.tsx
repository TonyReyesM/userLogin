import React from "react";

import {
  Title,
  Form,
  Question,
  Label,
  Input,
  SubmitButton,
} from "../common/common.style";

export const RegisterForm = () => {
  return (
    <Form>
      <Title>Sign up now!</Title>
      <Question>
        <Label>Username</Label>
        <Input id="username" name="username" />
      </Question>
      <Question>
        <Label>Email</Label>
        <Input id="email" name="email" />
      </Question>
      <Question>
        <Label>Password</Label>
        <Input id="password" name="password" />
      </Question>
      <Question>
        <Label>Confirm password</Label>
        <Input id="confimPassword" name="confimPassword" />
      </Question>
      <SubmitButton type="submit">Sign up</SubmitButton>
    </Form>
  );
};
