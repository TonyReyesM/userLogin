//  hooks
import { useAuth } from "../../../hooks/useAuth";
import { useAxiosPrivate } from "../../../hooks/useAxiosPrivate";
import { useLocation } from "react-router-dom";

export const usePostComment = () => {
  const axiosPrivate = useAxiosPrivate();
  const { auth } = useAuth();
  const location = useLocation();
  const post = location.pathname.split("/").slice(-1)[0];

  const postComment = async (content) => {
    try {
      const response = await axiosPrivate.post("/api/comments/create", {
        ...content,
        user: auth.user._id,
        post,
      });
      return response.data.comment;
    } catch (error) {
      console.log(error);
    }
  };

  return postComment;
};
