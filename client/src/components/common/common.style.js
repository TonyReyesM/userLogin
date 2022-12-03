import styled from "styled-components";
import { palette } from "../common/palette";

export const WebsiteStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
  height: 95vh;
`;

export const PageStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5rem;
  height: 95vh;
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
  border-width: 0.2rem;
  border-radius: 1rem;
  border-color: ghostwhite;
  row-gap: 1.5rem;
  margin: 3vw;
  padding: 3vw;
  background-color: ${palette.background.light};
  color: ${palette.typography.textLight};
`;

export const Question = styled.div`
  display: flex;
  width: 24rem;
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
  width: 12rem;
  padding: 0.3rem 0.5rem;
  border: 2px solid transparent;
  border-radius: 0.6rem;

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
  display: inline-block;
  padding: 3% 12%;
  transition: 0.2s;
  width: fit-content;
  align-self: flex-end;

  &:hover {
    background-color: rgba(200, 200, 200, 0.8);
    color: ${palette.typography.textDark};
  }
`;

export const RegisterCTA = styled.p`
  text-align: right;
`;

export const Link = styled.a`
  color: #6fdd99;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 1vw;
  width: 98vw;
  max-height: 5rem;
  background-color: ${palette.background.light};
  color: ${palette.typography.textLight};
  border-style: solid;
  border-width: 0.2rem;
  border-radius: 1rem;
  border-color: ghostwhite;
  padding: 1rem;
  margin-top: 0.5rem;
`;

export const NavBarSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 1rem;
  margin: 0 2rem;
`;

export const LoadingSign = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${palette.typography.textLight};
  font-size: 24px;
`;

export const FieldAlert = styled.div`
  text-align: end;
  color: ${palette.typography.alert};
  font-weight: bold;
  width: 24rem;
`;

export const AvatarImg = styled.img`
  width: 8rem;
  object-fit: cover;
  z-index: 2;
  position: absolute;
  border: 50%;
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
