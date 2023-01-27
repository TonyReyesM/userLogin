//  hooks
import { axiosPrivate } from "../../../api/axios";
import { useAuth } from "../../../hooks/useAuth";

export const useEditComment = () => {
  const { auth } = useAuth();
  const user = auth.user._id;

  const editComment = async (_id, content) => {
    try {
      const response = await axiosPrivate.put("/api/comments/edit", {
        _id,
        content,
        user,
      });
      const editedComment = response.data.comment;
      return editedComment;
    } catch (error) {
      console.log(error);
    }
  };

  return editComment;
};
