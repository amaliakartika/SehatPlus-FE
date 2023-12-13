import { Outlet } from "react-router-dom";
import SidebarComponent from "./SidebarDokter";
import React, { useEffect, useState } from "react";

const LayoutDokter = () => {
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

export default LayoutDokter;
