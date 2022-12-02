import useAxiosPrivate from "./useAxiosPrivate";
import useGetUser from "./useGetUser";
import useAuth from "./useAuth";

const useUpdateUser = () => {
  const axiosPrivate = useAxiosPrivate();
  const { auth, setAuth } = useAuth();
  const getUser = useGetUser();

  const updateUser = async (userData) => {
    const user = await getUser();
    try {
      const response = await axiosPrivate.put(
        `/api/users/${user?._id}`,
        userData
      );
      const newUser = response.data.user;
      localStorage.setItem("user", JSON.stringify(newUser));
      setAuth({ ...auth, user: newUser });
    } catch (error) {
      console.log(error);
    }
  };

  return updateUser;
};

export default useUpdateUser;
