import { Outlet } from "react-router-dom";
import NavbarComponent from "./AppNavbar";
import FooterComponent from "./Footer";

import React, { useEffect, useState } from "react";
import axios from "axios";

import AOS from "aos";
import "aos/dist/aos.css";

const Layout = () => {
  // BUAT EFEK ANIMASI MENGGUNAKAN AOS
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <NavbarComponent />

      <Outlet />

      <FooterComponent />
    </>
  );
};

export default Layout;
