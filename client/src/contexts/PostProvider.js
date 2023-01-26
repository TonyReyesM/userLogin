//  hooks
import { createContext } from "react";
import { useGetPost } from "../hooks/useGetPost";
import { useGetPostComments } from "../components/CommentsSection/hooks/useGetPostComments";

const PostContext = createContext({});

export const PostProvider = ({ children }) => {
  const { post, postUser } = useGetPost();
  const { comments, setComments } = useGetPostComments();

  return (
    <PostContext.Provider value={{ post, postUser, comments, setComments }}>
      {children}
    </PostContext.Provider>
  );
};

export default PostContext;
