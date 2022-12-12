import styled from "styled-components";

//  components
import { Link } from "react-router-dom";

//  hooks
import { useNavigate } from "react-router-dom";
import { useLogout } from "./hooks/useLogout";
import { useAuth } from "../../hooks/useAuth";
import { useTheme } from "../../hooks/useTheme";

//  assets
import { AlienProfile } from "../../assets";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

//  styles
import {
  Header,
  Button,
  Title,
  NavBarSection,
  AvatarImg,
  AvatarWrapper,
  ThemeButton,
} from "../common/common.style";
import { palette } from "../common/palette";

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

const avatarStyle = {
  position: "static",
  width: "2.5rem",
  height: "2.5rem",
};

const avatarWrapperStyle = {
  position: "static",
  width: "2.5rem",
  height: "2.5rem",
};

const NavBar = () => {
  const { auth } = useAuth();
  const { theme, setTheme } = useTheme();
  const logout = useLogout();
  const navigate = useNavigate();

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Header>
      <Link to="/" style={linkStyle}>
        <Title>LoginDude</Title>
      </Link>

      <NavBarSection>
        {!auth.accessToken ? (
          <>
            <LogButton onClick={() => navigate("/login")}>Login</LogButton>
            <Link to="/register" style={{ ...linkStyle, width: "5rem" }}>
              Sign Up
            </Link>
          </>
        ) : (
          <>
            <Link to={`/user/${auth.user._id}`}>
              <AvatarWrapper style={avatarWrapperStyle}>
                <AvatarImg
                  src={auth.user.photo || AlienProfile}
                  style={avatarStyle}
                />
              </AvatarWrapper>
            </Link>
            <Link to={`/user/${auth.user._id}`} style={linkStyle}>
              <Title style={{ fontSize: "1.5rem" }}>{auth.user.username}</Title>
            </Link>
            <LogButton onClick={logout}>Log out</LogButton>
          </>
        )}
        <ThemeButton onClick={changeTheme}>
          {theme === "light" ? <DarkModeIcon /> : <LightModeIcon />}
        </ThemeButton>
      </NavBarSection>
    </Header>
  );
};

export default NavBar;
