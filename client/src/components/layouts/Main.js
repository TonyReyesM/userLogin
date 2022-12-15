//  components
import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

//  styles
import { PageStyle } from "../common/common.style";

const Main = () => {
  return (
    <>
      <NavBar />
      <PageStyle>
        <Outlet />
      </PageStyle>
    </>
  );
};

export default Main;
