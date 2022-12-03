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
      const formData = new FormData();

      formData.append("username", userData.username);
      formData.append("email", userData.email);
      formData.append("photo", userData.photo[0]);

      console.log(formData);

      const response = await axiosPrivate.put(
        `/api/users/${user?._id}`,
        formData
      );
      const newUser = response.data.user;
      console.log(newUser);
      localStorage.setItem("user", JSON.stringify(newUser));
      setAuth({ ...auth, user: newUser });
    } catch (error) {
      console.log(error);
    }
  };

  return updateUser;
};

export default useUpdateUser;
