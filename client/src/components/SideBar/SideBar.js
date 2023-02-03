import styled from "styled-components";

//  hooks
import { useAuth } from "../../hooks/useAuth";

//  components
import { Link } from "react-router-dom";

//  assets
import HomeIcon from "@mui/icons-material/Home";
import AlbumIcon from "@mui/icons-material/Album";
import DiamondIcon from "@mui/icons-material/Diamond";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";

//  styles
import { palette } from "../common/palette";

const Bar = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  position: fixed;
  top: 5rem;
  left: 0;
  background-color: ${palette.background.main};
  color: ${palette.typography.textDark};
  border-right: 1px solid ghostwhite;
  padding: 3vw;
  width: 20vw;
  height: 100vh;
`;

const DashboardSection = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1rem;
  font-size: 1.5rem;
  padding: 0.5rem;
  border-radius: 1rem;

  &:hover {
    background-color: rgba(200, 200, 200, 0.8);
    color: ${palette.typography.textDark};
  }
`;

const DashboardSubsection = styled(DashboardSection)`
  margin-left: 2.5rem;
  font-size: 1.2rem;
`;

const linkStyle = {
  color: palette.typography.textLight,
  fontWeight: "bold",
  textDecoration: "none",
};

const SideBar = () => {
  const { auth } = useAuth();

  return (
    <Bar>
      {auth.user && (
        <>
          <Link to={`/dashboard/${auth.user._id}`} style={linkStyle}>
            <DashboardSection>
              <HomeIcon />
              Home
            </DashboardSection>
          </Link>
          <Link to={`/dashboard/${auth.user._id}/projects`} style={linkStyle}>
            <DashboardSection>
              <DiamondIcon />
              Projects
            </DashboardSection>
          </Link>
          <Link to={`/dashboard/${auth.user._id}/my-posts`} style={linkStyle}>
            <DashboardSubsection>My Posts</DashboardSubsection>
          </Link>
          <Link to={`/dashboard/${auth.user._id}/account`} style={linkStyle}>
            <DashboardSection>
              <PersonIcon />
              Account
            </DashboardSection>
          </Link>
          <Link to={`/dashboard/${auth.user._id}/settings`} style={linkStyle}>
            <DashboardSection>
              <SettingsIcon />
              Settings
            </DashboardSection>
          </Link>
        </>
      )}
    </Bar>
  );
};

export default SideBar;
