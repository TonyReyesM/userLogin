//  hooks
import { useAuth } from "../../hooks/useAuth";
import { useEffect } from "react";

//  components
import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import SideBar from "../SideBar/SideBar";

//  styles
import { PageStyle } from "../common/common.style";

const Dashboard = () => {
  const { auth, setAuth } = useAuth();
  console.log({ ...auth });

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
      <SideBar />
      <PageStyle>
        <Outlet />
      </PageStyle>
    </>
  );
};

export default Dashboard;
