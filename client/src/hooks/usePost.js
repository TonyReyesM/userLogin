import { useContext } from "react";
import PostContext from "../contexts/PostProvider";

export const usePost = () => {
  return useContext(PostContext);
};
