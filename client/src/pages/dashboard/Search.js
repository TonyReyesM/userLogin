// libraries
import styled from "styled-components";

//  hooks
import { useSearch } from "../../hooks/useSearch";

//  styles
import {
  Title,
  AvatarWrapper,
  AvatarImg,
  Button,
} from "../../components/common/common.style";
import { palette } from "../../components/common/palette";

const ResultHolder = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-radius: 0.5rem;
  row-gap: 1.5rem;
  margin: 3rem;
  padding: 3rem;
  background-color: ${palette.typography.textLight};
  color: ${palette.typography.textDark};
  width: 40vw;
  max-width: 40rem;
`;

const ResultInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 2rem;
  height: 100%;
`;

const ButtonSection = styled.div`
  display: flex;
  justify-content: flex-end;
  align-content: flex-end;
  height: 100%;
  width: 100%;
`;

const AddButton = styled(Button)`
  /* width: 100%; */
`;

const Search = () => {
  const queryResult = useSearch();

  return (
    <>
      {queryResult &&
        queryResult.map((result) => {
          return (
            <ResultHolder>
              <ResultInfo>
                <AvatarWrapper>
                  <AvatarImg src={result.photo} />
                </AvatarWrapper>
                <Title>{result.username}</Title>
              </ResultInfo>
              <ButtonSection>
                <AddButton>Follow</AddButton>
              </ButtonSection>
            </ResultHolder>
          );
        })}
    </>
  );
};

export default Search;
