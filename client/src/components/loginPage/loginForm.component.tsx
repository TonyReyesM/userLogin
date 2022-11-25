import React from "react";

import {
  Title,
  Form,
  Question,
  Label,
  Input,
  SubmitButton,
} from "../common/common.style";

export const LoginForm = () => {
  return (
    <Form>
      <Title>User login</Title>
      <Question>
        <Label>Email</Label>
        <Input id="email" name="email" />
      </Question>
      <Question>
        <Label>Password</Label>
        <Input id="password" name="password" />
      </Question>
      <SubmitButton type="submit">Login</SubmitButton>
    </Form>
  );
};
