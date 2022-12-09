import styled from "styled-components";

//  hooks
import { useAuth } from "../../hooks/useAuth";
import { useEffect } from "react";

//  components
import { Outlet } from "react-router-dom";
import NavBar from "../NavBar";
import SideBar from "../SideBar";

//  styles
import { PageStyle } from "../common/common.style";

const Wrapper = styled.div`
  display: flex;
  position: relative;
  top: 10rem;
  justify-content: space-between;
  align-items: flex-start;
`;

const Main = () => {
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
      <Wrapper>
        {/* <SideBar /> */}
        <PageStyle>
          <Outlet />
        </PageStyle>
      </Wrapper>
    </>
  );
};

export default Main;
