//  libraries
import styled from "styled-components";

//  hooks
import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

//  styles
import { Input, Button } from "../common/common.style";

const SearchWrapper = styled.div`
  display: flex;
  width: 35%;
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
  flex: 0.5;
  border-radius: 0 0.6rem 0.6rem 0;
`;

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const { auth } = useAuth();
  const navigate = useNavigate();

  return (
    <SearchWrapper>
      <SearchInput
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        value={query}
      />
      <SearchButton
        onClick={() =>
          navigate(`/dashboard/${auth.user._id}/search?query=${query}`)
        }
      >
        Search
      </SearchButton>
    </SearchWrapper>
  );
};

export default SearchBar;
