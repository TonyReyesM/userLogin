import { useAxiosPrivate } from "../../../hooks/useAxiosPrivate";
import { useGetUser } from "../../../hooks/useGetUser";

export const useUpdatePassword = () => {
  const axiosPrivate = useAxiosPrivate();
  const getUser = useGetUser();

  const updatePassword = async (data) => {
    try {
      const user = await getUser();
      const response = await axiosPrivate.put(
        `/api/users/password/${user?._id}`,
        data
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return updatePassword;
};
