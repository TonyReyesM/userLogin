import React from "react";
import { Outlet } from "react-router-dom";

import NavBar from "../../components/navBar";

export const UserLoginLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};
