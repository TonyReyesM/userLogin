//  hooks
import { useState, createContext } from "react";
import { useGetPost } from "../hooks/useGetPost";
import { useGetPostComments } from "../components/CommentsSection/hooks/useGetPostComments";

const PostContext = createContext({});

export const PostProvider = ({ children }) => {
  const [openCommentEditor, setOpenCommentEditor] = useState(false);
  const { post, postUser } = useGetPost();
  const { comments, setComments } = useGetPostComments();

  return (
    <PostContext.Provider
      value={{
        post,
        postUser,
        comments,
        setComments,
        openCommentEditor,
        setOpenCommentEditor,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

export default PostContext;
