//  hooks
import { useAuth } from "../../../hooks/useAuth";
import { useAxiosPrivate } from "../../../hooks/useAxiosPrivate";

export const useCreatePost = () => {
  const axiosPrivate = useAxiosPrivate();
  const { auth } = useAuth();

  const createPost = async (data) => {
    console.log({ ...data, user: auth.user._id });
    try {
      const response = await axiosPrivate.post("/api/posts/create", {
        ...data,
        user: auth.user._id,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return createPost;
};
