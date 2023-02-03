import styled from "styled-components";
import { palette } from "../common/palette";

export const WebsiteStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;
  height: 95vh;
`;

export const PageStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: 5rem;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-style: solid;
  border-width: 1px;
  border-radius: 0.5rem;
  border-color: ghostwhite;
  row-gap: 1.5rem;
  margin: 3rem;
  padding: 3rem;
  max-width: 35vw;
  background-color: ${palette.background.light};
  color: ${palette.typography.textLight};
`;

export const Question = styled.div`
  display: flex;
  width: 100%;
  column-gap: 1rem;
  justify-content: space-between;
  align-items: center;
`;

export const Label = styled.label`
  font-weight: bold;
  width: 15rem;
`;

export const Input = styled.input`
  font-size: 1rem;
  color: ${palette.typography.textDark};
  background-color: #dddddd;
  width: 100%;
  padding: 0.3rem 0.5rem;
  border: 2px solid transparent;
  border-radius: 0.6rem;
  max-width: 14rem;
  box-sizing: border-box;

  -moz-appearance: textfield;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &:hover {
    cursor: pointer;
    background-color: #eeeeee;
  }

  &:focus {
    cursor: text;
  }
`;

export const TextAreaInput = styled.textarea`
  font-size: 1rem;
  color: ${palette.typography.textDark};
  background-color: #dddddd;
  width: 100%;
  height: 10vw;
  max-height: 15rem;
  resize: none;
  padding: 0.3rem 0.5rem;
  border: 2px solid transparent;
  border-radius: 0.6rem;
  box-sizing: border-box;

  -moz-appearance: textfield;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &:hover {
    cursor: pointer;
    background-color: #eeeeee;
  }

  &:focus {
    cursor: text;
  }
`;

export const ImgInput = styled.input`
  display: none;
`;

export const Button = styled.button`
  background-color: ${palette.background.dark};
  border-style: none;
  border-radius: 18px;
  color: white;
  font-size: 1em;
  font-weight: bold;
  text-align: center;
  display: flex;
  padding: 3% 12%;
  transition: 0.2s;
  width: fit-content;
  align-self: flex-end;

  &:hover {
    background-color: rgba(200, 200, 200, 0.8);
    color: ${palette.typography.textDark};
  }
`;

export const CTA = styled.p`
  text-align: right;
`;

export const Link = styled.a`
  color: #6fdd99;
`;

export const LoadingSign = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${palette.typography.textLight};
  position: fixed;
  top: 40vh;
  border-style: solid;
  border-color: ${palette.typography.textLight};
  border-width: 5px;
  border-radius: 50%;
  padding: 2rem;
`;

export const FieldAlert = styled.div`
  text-align: end;
  color: ${palette.typography.alert};
  font-weight: bold;
  width: 24rem;
`;

export const AvatarImg = styled.img`
  width: 8rem;
  height: 8rem;
  object-fit: cover;
  z-index: 2;
  position: absolute;
  border-radius: 50%;
`;

export const AvatarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #dddddd;
  flex-direction: column;
  width: 8rem;
  height: 8rem;
  z-index: 1;
  border-radius: 50%;
  border-style: solid;
  border-width: 0.2rem;
  border-color: ghostwhite;
`;

export const ThemeButton = styled(Button)`
  align-self: center;
  padding: 3.5% 3.5%;
  border-radius: 50%;
`;
