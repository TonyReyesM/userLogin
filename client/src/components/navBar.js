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

const LogButton = styled(Button)`
  display: inline-block;
  padding: 5% 7%;
  width: 8rem;
  align-items: flex-end;
`;

const linkStyle = {
  color: palette.typography.textLight,
  fontWeight: "bold",
  textDecoration: "none",
};

const NavBar = () => {
  const { auth } = useAuth();
  const logout = useLogout();
  const navigate = useNavigate();

  return (
    <Header>
      <Link to="/" style={linkStyle}>
        <Title>LoginDude</Title>
      </Link>

      <NavBarSection>
        {!auth.accessToken ? (
          <>
            <LogButton onClick={() => navigate("/login")}>Login</LogButton>
            <Link to="/register" style={linkStyle}>
              Register
            </Link>
          </>
        ) : (
          <LogButton onClick={logout}>Log out</LogButton>
        )}
      </NavBarSection>
    </Header>
  );
};

export default NavBar;
