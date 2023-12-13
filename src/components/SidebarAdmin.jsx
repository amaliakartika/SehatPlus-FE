import React, { useContext } from "react";
import { Sidebar } from "flowbite-react";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function SidebarAdmin() {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/")
  };


  return (
    <Sidebar
      className="h-screen bg-blue-100"
      aria-label="Default sidebar example"
    >
      <Sidebar.Items>
        <Sidebar.ItemGroup className="flex flex-col gap-3">
          <Sidebar.Item href="#" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Link to="/admin-dashboard/data-booking">
            <Sidebar.Item icon={HiInbox}>Booking</Sidebar.Item>
          </Link>
          <Link to="/admin-dashboard/data-artikel">
            <Sidebar.Item icon={HiViewBoards}>Artikel</Sidebar.Item>
          </Link>
          <Link to="/admin-dashboard/data-pasien">
            <Sidebar.Item icon={HiUser}>Pasien</Sidebar.Item>
          </Link>
          <Link to="/admin-dashboard/data-dokter">
            <Sidebar.Item icon={HiUser}>Dokter</Sidebar.Item>
          </Link>
          <Sidebar.Item onClick={handleLogout} href="#" icon={HiArrowSmRight}>
            Logout
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}

export default SidebarAdmin;
