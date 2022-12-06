import { Buffer } from "buffer";

import useAxiosPrivate from "./useAxiosPrivate";
import useGetUser from "./useGetUser";
import useAuth from "./useAuth";

const useUpdateUser = () => {
  const axiosPrivate = useAxiosPrivate();
  const { auth, setAuth } = useAuth();
  const getUser = useGetUser();

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();

      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const updateUser = async (userData) => {
    const user = await getUser();
    try {
      const base64Image = await convertBase64(userData.photo[0]);

      const formData = new FormData();
      formData.append("username", userData.username);
      formData.append("email", userData.email);
      formData.append("photo", base64Image);

      const response = await axiosPrivate.put(
        `/api/users/${user?._id}`,
        formData
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
