import React from "react";
import { Link } from "react-router-dom";

import { Bar } from "./navBar.style";

import { palette } from "../common/palette";

const linkStyle = {
  color: palette.typography.textLight,
  fontWeight: "bold",
};

export const NavBar = () => {
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
