//  hooks
import { axiosPrivate } from "../../../api/axios";
import { useAuth } from "../../../hooks/useAuth";

export const useDeleteComment = () => {
  const { auth } = useAuth();
  const user = auth.user._id;

  const deleteComment = async (_id) => {
    try {
      await axiosPrivate.delete("/api/comments/delete", {
        data: { _id, user },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return deleteComment;
};
