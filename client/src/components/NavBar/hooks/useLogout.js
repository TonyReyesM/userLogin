//  hooks
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
import axios from "../../../api/axios";

export const useLogout = () => {
  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();

  const logout = async () => {
    try {
      const refreshToken = auth.refreshToken;

      await axios.delete("/api/users/logout", {
        data: {
          token: refreshToken,
        },
      });
      setAuth({});
      localStorage.removeItem("user");
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return logout;
};
