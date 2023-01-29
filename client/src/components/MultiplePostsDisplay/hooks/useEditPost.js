//  hooks
import { useAxiosPrivate } from "../../../hooks/useAxiosPrivate";

export const useEditPost = () => {
  const axiosPrivate = useAxiosPrivate();

  const editPost = async (id, postData) => {
    try {
      await axiosPrivate.put(`/api/posts/update/${id}`, postData);
    } catch (error) {
      console.log(error);
    }
  };
  return editPost;
};
