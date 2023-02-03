//  libraries
import styled from "styled-components";

//  styles
import { Input, Button } from "../common/common.style";

const SearchWrapper = styled.div`
  display: flex;
  width: 30%;
`;

const SearchInput = styled(Input)`
  flex: 2;
  width: 100%;
  padding: 0.3rem 0.5rem;
  border: 2px solid transparent;
  border-radius: 0.6rem 0 0 0.6rem;
  max-width: none;
  box-sizing: border-box;
`;

const SearchButton = styled(Button)`
  flex: 0.1;
  border-radius: 0 0.6rem 0.6rem 0;
  /* width: ; */
`;

const SearchBar = () => {
  return (
    <SearchWrapper>
      <SearchInput />
      <SearchButton Button>Search</SearchButton>
    </SearchWrapper>
  );
};

export default SearchBar;
