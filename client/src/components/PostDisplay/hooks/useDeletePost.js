//  hooks
// import { useAuth } from "../../../hooks/useAuth";
import { useAxiosPrivate } from "../../../hooks/useAxiosPrivate";

export const useDeletePost = () => {
  const axiosPrivate = useAxiosPrivate();

  const deletePost = async (id) => {
    try {
      await axiosPrivate.delete(`/api/posts/delete/${id}`);
    } catch (error) {
      console.log(error);
    }
  };
  return deletePost;
};
