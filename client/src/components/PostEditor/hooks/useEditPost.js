//  hooks
import { useAxiosPrivate } from "../../../hooks/useAxiosPrivate";
import { useLocation } from "react-router-dom";

export const useEditPost = () => {
  const axiosPrivate = useAxiosPrivate();
  const location = useLocation();
  const id = location.pathname.split("/").slice(-1)[0];

  const editPost = async (postData) => {
    try {
      const response = await axiosPrivate.put(
        `/api/posts/update/${id}`,
        postData
      );
      return response.data.post;
    } catch (error) {
      console.log(error);
    }
  };
  return editPost;
};
