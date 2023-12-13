import { Outlet } from "react-router-dom";
import SidebarComponent from "./SidebarAdmin";
import React, { useEffect, useState } from "react";

const LayoutAdmin = () => {
  return (
    <>
      <div className="flex">
        <SidebarComponent />

        <div className="w-screen">
        <Outlet />
        </div>
      </div>
    </>
  );
};

export default LayoutAdmin;
