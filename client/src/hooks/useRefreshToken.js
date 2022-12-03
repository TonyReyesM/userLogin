import axios from "../api/axios";
import useAuth from "./useAuth";
// import useGetUser from "./useGetUser";

const useRefreshToken = () => {
  const { auth, setAuth } = useAuth();

  const user = auth.user ? auth.user : JSON.parse(localStorage.getItem("user"));

  const refreshToken = auth.refreshToken
    ? auth.refreshToken
    : localStorage.getItem("refreshToken");

  const refresh = async () => {
    const response = await axios.post("/api/users/token", { refreshToken });
    localStorage.setItem("accessToken", response.data.accessToken);

    setAuth({ user, accessToken: response.data.accessToken, refreshToken });
    // setAuth({ accessToken: response.data.accessToken, refreshToken });
    return response.data.accessToken;
  };

  return refresh;
};

export default useRefreshToken;
