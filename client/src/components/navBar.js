import React from "react";
import { Link } from "react-router-dom";

import { Bar } from "./common/common.style";

import { palette } from "./common/palette";

const linkStyle = {
  color: palette.typography.textLight,
  fontWeight: "bold",
};

const NavBar = () => {
  return (
    <Bar>
      <Link to="/login" style={linkStyle}>
        Login
      </Link>
      <Link to="/register" style={linkStyle}>
        Register
      </Link>
    </Bar>
  );
};

export default NavBar;
