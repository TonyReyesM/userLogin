import { useNavigate, useLocation } from "react-router-dom";

//  hooks
import useAxiosPrivate from "./useAxiosPrivate";

const useGetUser = () => {
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();
  const location = useLocation();

  const getUser = async () => {
    try {
      const response = await axiosPrivate.get("/api/users/me", {
        // signal: controller.signal,
      });
      const { user } = response.data;
      return user;
    } catch (error) {
      console.log(error);
      navigate("/login", { state: { from: location }, replace: true });
    }
  };

  return getUser;
};

export default useGetUser;
