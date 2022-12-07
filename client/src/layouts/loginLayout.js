//  hooks
import useAuth from "../hooks/useAuth";
import { useEffect } from "react";

//  components
import { Outlet } from "react-router-dom";
import NavBar from "../components/navBar";
import SideBar from "../components/sideBar";

//  styles
import { PageStyle } from "../components/common/common.style";

const UserLoginLayout = () => {
  const { auth, setAuth } = useAuth();

  useEffect(() => {
    if (!auth.user && localStorage.getItem("accessToken")) {
      const user = JSON.parse(localStorage.getItem("user"));
      const accessToken = localStorage.getItem("accessToken");
      const refreshToken = localStorage.getItem("refreshToken");
      setAuth({ user, accessToken, refreshToken });
    }
  }, []);

  return (
    <>
      <NavBar />
      <div>
        <SideBar />
        <PageStyle>
          <Outlet />
        </PageStyle>
      </div>
    </>
  );
};

export default UserLoginLayout;
