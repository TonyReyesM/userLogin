import axios from "../../../api/axios";

//  hooks
import { useAuth } from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();

  const login = async (userData) => {
    try {
      const response = await axios.post("/api/users/login", userData);

      const accessToken = response?.data?.accessToken;
      const refreshToken = response?.data?.refreshToken;
      const user = response?.data?.user;

      setAuth({ user, accessToken, refreshToken });
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);

      axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

      navigate(`/user/${user._id}`);
      // navigate(from || `/user/${user.username}`, { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  return login;
};
