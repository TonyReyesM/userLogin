import styled from "styled-components";
import { palette } from "../common/palette";

export const PageWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  width: 25vw;
  column-gap: 1rem;
  justify-content: space-between;
`;

export const Label = styled.label`
  font-weight: bold;
`;

export const Input = styled.input`
  font-size: 1rem;
  font-weight: bold;
  color: rgba(0, 80, 30, 0.8);
  background-color: #dddddd;
  width: 12vw;
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

export const SubmitButton = styled.button`
  background-color: ${palette.background.dark};
  border-style: none;
  border-radius: 18px;
  color: white;
  font-size: 1em;
  font-weight: bold;
  text-align: center;
  display: inline-block;
  padding: 1% 5%;
  margin-bottom: 2rem;
  transition: 0.2s;

  &:hover {
    background-color: rgba(200, 200, 200, 0.8);
    color: ${palette.typography.textDark};
  }
`;
