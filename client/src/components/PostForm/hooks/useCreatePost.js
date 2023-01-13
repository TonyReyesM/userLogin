//  hooks
import { useAuth } from "../../../hooks/useAuth";
import { useAxiosPrivate } from "../../../hooks/useAxiosPrivate";

export const useCreatePost = () => {
  const axiosPrivate = useAxiosPrivate();
  const { auth } = useAuth();

  const createPost = async (data) => {
    try {
      const response = await axiosPrivate.post("/api/posts/create", {
        ...data,
        user: auth.user._id,
      });
      return response.data.post;
    } catch (error) {
      console.log(error);
    }
  };

  return createPost;
};
