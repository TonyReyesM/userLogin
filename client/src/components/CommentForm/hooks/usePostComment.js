//  hooks
import { useAuth } from "../../../hooks/useAuth";
import { useAxiosPrivate } from "../../../hooks/useAxiosPrivate";

export const usePostComment = () => {
  const axiosPrivate = useAxiosPrivate();
  const { auth } = useAuth();

  const postComment = async (content, post) => {
    try {
      const response = await axiosPrivate.post("/api/comments/create", {
        ...content,
        user: auth.user._id,
        post,
      });
      console.log(response.data.comment);
      return response.data.comment;
    } catch (error) {
      console.log(error);
    }
  };

  return postComment;
};
