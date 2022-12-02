import styled from "styled-components";

//  components
import { Link } from "react-router-dom";

//  hooks
import { useNavigate } from "react-router-dom";
import useLogout from "../hooks/useLogout";
import useAuth from "../hooks/useAuth";

//  styles
import { Header, Button, Title, NavBarSection } from "./common/common.style";
import { palette } from "./common/palette";

const LoginButton = styled(Button)`
  /* text-align: center; */
  display: inline-block;
  padding: 5% 7%;
  transition: 0.2s;
  width: 8rem;
  align-items: flex-end;
`;

const LogoutButton = styled(Button)`
  /* text-align: center; */
  display: inline-block;
  padding: 5% 7%;
  transition: 0.2s;
  width: 8rem;
  align-items: flex-end;
`;

const linkStyle = {
  color: palette.typography.textLight,
  fontWeight: "bold",
};

const NavBar = () => {
  const { auth } = useAuth();
  const logout = useLogout();
  const navigate = useNavigate();

  return (
    <Header>
      <Title>LoginDude</Title>

      <NavBarSection>
        {!auth.accessToken ? (
          <>
            <LoginButton onClick={() => navigate("/login")}>Login</LoginButton>
            <Link to="/register" style={linkStyle}>
              Register
            </Link>
          </>
        ) : (
          <LogoutButton onClick={logout}>Log out</LogoutButton>
        )}
      </NavBarSection>
    </Header>
  );
};

export default NavBar;
