//  components
import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import SideBar from "../SideBar/SideBar";

//  styles
import { PageStyle } from "../common/common.style";

const Dashboard = () => {
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
