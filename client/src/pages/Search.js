// libraries
import styled from "styled-components";

//  hooks
// import { useEffect } from "react";
import { useSearch } from "../hooks/useSearch";

//  styles

const Search = () => {
  const queryResult = useSearch();

  return <h1>Search</h1>;
};

export default Search;
