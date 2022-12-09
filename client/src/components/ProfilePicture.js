import styled from "styled-components";

//  hooks
import { useRef } from "react";

//  styles
import {
  AvatarWrapper,
  AvatarImg,
  ImgInput,
  Button,
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

const ProfilePicture = ({ src, register }) => {
  const imgInput = useRef();

  const handleChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
  };

  const handleClick = (e) => {
    imgInput.current.click();
  };

  return (
    <AvatarWrapper>
      <ImgLabel htmlFor="photo">
        <AvatarImg src={src} />
        <ImgInput
          type="file"
          id="photo"
          onChange={handleChange}
          ref={imgInput}
        />
        <UploadButton onClick={handleClick}>+</UploadButton>
      </ImgLabel>
    </AvatarWrapper>
  );
};

export default ProfilePicture;
