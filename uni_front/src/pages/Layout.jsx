import React from "react";
import {Outlet} from "react-router-dom";
import Navbar from "../components/navbar";

const Layout = () => {
  return (
    <>
      <html data-theme="dark"></html>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Layout;