import { Outlet } from "react-router-dom";

import NavBar from "../components/navBar";

//  styles
import { PageStyle } from "../components/common/common.style";

const UserLoginLayout = () => {
  return (
    <>
      <NavBar />
      <PageStyle>
        <Outlet />
      </PageStyle>
    </>
  );
};

export default UserLoginLayout;
