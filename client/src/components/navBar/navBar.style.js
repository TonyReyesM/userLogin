import styled from "styled-components";

import { palette } from "../common/palette";

export const Bar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 98vw;
  background-color: ${palette.background.light};
  color: ${palette.typography.textLight};
  border-style: solid;
  border-width: 0.2rem;
  border-radius: 1rem;
  border-color: ghostwhite;
  padding: 1rem;
  margin-top: 0.5rem;
`;
