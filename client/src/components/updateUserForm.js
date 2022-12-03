import { yupResolver } from "@hookform/resolvers/yup";
import styled from "styled-components";

//  hooks
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import useUpdateUser from "../hooks/useUpdateUser";
import useAuth from "../hooks/useAuth";

//  validations
import { updateUserSchema } from "../validations/updateUserValidation";

//  components
import ProfilePicture from "./profilePicture";

//  assets
import { AlienProfile } from "../assets";

//  styles
import {
  Title,
  Form,
  Input,
  Question,
  Label,
  Button,
  FieldAlert,
  AvatarImg,
  AvatarWrapper,
  ImgInput,
} from "./common/common.style";

const ImgLabel = styled.label`
  position: absolute;
  justify-self: center;
  align-self: center;
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  z-index: 3;
`;

const UploadButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 6.5rem;
  left: 5.3rem;
  width: 2rem;
  z-index: 4;
`;

const UpdateUserForm = () => {
  const updateUser = useUpdateUser();
  const { auth } = useAuth();
  const imgInput = useRef();
  const [image, setImage] = useState(null);

  const {
    register,
    handleSubmit,
    formState,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: auth.user.username,
      email: auth.user.email,
    },
    resolver: yupResolver(updateUserSchema),
  });

  const { ref } = register("photo");

  const onSubmit = (userData) => {
    updateUser(userData);
    setImage(null);
  };

  const handleClick = (e) => {
    imgInput.current.click();
  };

  const onChangePicture = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Title>Account</Title>

      <AvatarWrapper>
        <ImgLabel htmlFor="photo">
          <AvatarImg src={auth.user.photo || image || AlienProfile} />
          <ImgInput
            type="file"
            id="photo"
            onChange={onChangePicture}
            ref={(e) => {
              ref(e);
              imgInput.current = e;
            }}
          />
          <UploadButton type="button" onClick={handleClick}>
            +
          </UploadButton>
        </ImgLabel>
      </AvatarWrapper>

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
      <Button type="submit">Save</Button>
    </Form>
  );
};

export default UpdateUserForm;
