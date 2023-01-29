//  hooks
import { useState, createContext } from "react";
import { useGetPost } from "../hooks/useGetPost";
import { useGetPostComments } from "../components/CommentsSection/hooks/useGetPostComments";

const PostContext = createContext({});

export const PostProvider = ({ children }) => {
  const [openEditor, setOpenEditor] = useState({
    isOpen: false,
    type: "none",
  });
  const { post, postUser } = useGetPost();
  const { comments, setComments } = useGetPostComments();

  return (
    <PostContext.Provider
      value={{
        post,
        postUser,
        comments,
        setComments,
        openEditor,
        setOpenEditor,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

export default PostContext;
