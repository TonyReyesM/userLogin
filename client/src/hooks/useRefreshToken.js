import axios from "../api/axios";
import useAuth from "./useAuth";
// import useGetUser from "./useGetUser";

const useRefreshToken = () => {
  const { auth, setAuth } = useAuth();
  // const getUser = useGetUser();

  const user = auth.user ? auth.user : JSON.parse(localStorage.getItem("user"));

  const refreshToken = auth.refreshToken
    ? auth.refreshToken
    : localStorage.getItem("refreshToken");

  const refresh = async () => {
    console.log("Refreshing token");
    const response = await axios.post("/api/users/token", { refreshToken });
    // const user = await getUser();
    console.log(response.data);
    localStorage.setItem("accessToken", response.data.accessToken);

    setAuth({ user, accessToken: response.data.accessToken, refreshToken });
    // setAuth({ accessToken: response.data.accessToken, refreshToken });
    return response.data.accessToken;
  };

  return refresh;
};

export default useRefreshToken;
