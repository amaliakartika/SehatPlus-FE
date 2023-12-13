import React, { useState, useEffect, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar, Button } from "flowbite-react"; // Assuming you have Button component from flowbite-react
import { AuthContext } from "../context/AuthContext";
import logo from "../assets/logo.svg";

function AppNavbar() {
  const { isAuthenticated, user, logout, setUser } = useContext(AuthContext);
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  const handleLogout = () => {
    logout();
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          "https://65632a51ee04015769a6dd6e.mockapi.io/user/users"
        );
        const userData = await response.json();

        if (userData.length > 0) {
          setUser(userData[0]); // Assuming you want the first user from the API
        }

        setLoading(false);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setLoading(false);
      }
    };

    if (isAuthenticated && !user?.nama && loading) {
      fetchUserData();
    }
  }, [isAuthenticated, user?.nama, setUser, loading]);

  return (
    <Navbar
      fluid
      rounded
      className="bg-[#DAE0F9] dark:bg-gray-900 fixed w-full z-20 top-0 start-0"
    >
      <Navbar.Brand
        href="/"
        className="flex items-center space-x-3 rtl:space-x-reverse lg:ml-[2rem] xl:ml-[3rem]"
      >
        <img src={logo} className="h-10 rounded-full" alt="Flowbite Logo" />
        <span className="self-center md:text-sm xl:text-2xl font-semibold whitespace-nowrap text-[#080C71]">
          SehatPlus
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2 md:hidden">
        <Navbar.Toggle />
      </div>
      <div className="hidden md:flex items-center w-[80vw] justify-between">
        <div className="xl:text-lg xl:flex xl:w-[40vw] xl:justify-center xl:gap-[2rem] xl:ml-[16rem] lg:text-[14px] lg:flex lg:w-[40vw] lg:justify-center lg:gap-[1rem] lg:ml-[6rem] md:flex md:w-[40vw] md:justify-center md:text-[10px] md:gap-[1rem] md:ml-[6rem]">
          <Link
            to={
              isAuthenticated
                ? user.role === "admin"
                  ? "/admin-home"
                  : "/"
                : "/"
            }
            className={`font-bold ${
              location.pathname ===
              (isAuthenticated && user.role === "admin" ? "/admin-home" : "/")
                ? "text-blue-700"
                : "text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
            }`}
          >
            Home
          </Link>

          {isAuthenticated && user.role === "dokter" && (
            <Link
              to="/ruang-chat"
              className={`font-bold ${
                location.pathname === "/dokter"
                  ? "text-blue-700"
                  : "text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
              }`}
            >
              RuangChat
            </Link>
          )}

          {isAuthenticated && user.role === "pasien" && (
            <Link
              to="/spesialisasi"
              className={`font-bold ${
                location.pathname === "/konsultasi"
                  ? "text-blue-700"
                  : "text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
              }`}
            >
              Konsultasi
            </Link>
          )}

          {isAuthenticated && user.role === "admin" && (
            <>
              <Link
                to="/dokter"
                className={`font-bold ${
                  location.pathname === "/dokter"
                    ? "text-blue-700"
                    : "text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
                }`}
              >
                Dokter
              </Link>

              <Link
                to="/pasien"
                className={`font-bold ${
                  location.pathname === "/pasien"
                    ? "text-blue-700"
                    : "text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
                }`}
              >
                Pasien
              </Link>
            </>
          )}

          <Link
            to="/artikel"
            className={`font-bold ${
              location.pathname === "/artikel"
                ? "text-blue-700"
                : "text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
            }`}
          >
            Artikel
          </Link>

          <Link
            to="/kalkulator-bmi"
            className={`font-bold ${
              location.pathname === "/kalkulator-bmi"
                ? "text-blue-700"
                : "text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
            }`}
          >
            Kalkulator BMI
          </Link>
        </div>
        <div className="md:text-[10px] md:flex md:w-[40vw] md:items-center md:justify-end md:gap-[2px] lg:flex lg:text-[14px] lg:w-[40vw] lg:items-center lg:justify-end lg:gap-[1rem] xl:text-lg">
          {isAuthenticated ? (
            <>
              <img
                src={user.image}
                alt="Profile"
                className="h-8 w-8 rounded-full"
              />
              <span>{user.nama}</span>
              <Button className="bg-blue-700 hover:bg-blue-800 text-white md:text-sm xl:text-lg" onClick={handleLogout}>
  Logout
</Button>
            </>
          ) : (
            <Link
              to="/login"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-700 dark:hover:bg-blue-800 dark:focus:ring-blue-800"
            >
              Login/Register
            </Link>
          )}
        </div>
      </div>

      <Navbar.Collapse>
        <Navbar.Link>
          <Link
            to={
              isAuthenticated
                ? user.role === "admin"
                  ? "/admin-home"
                  : "/"
                : "/"
            }
            className={`font-bold ${
              location.pathname ===
              (isAuthenticated && user.role === "admin" ? "/admin-home" : "/")
                ? "text-blue-700"
                : "text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
            }`}
          >
            Home
          </Link>
        </Navbar.Link>

        {isAuthenticated && user.role === "dokter" && (
          <Navbar.Link>
            <Link
              to="/ruang-chat"
              className={`font-bold ${
                location.pathname === "/dokter"
                  ? "text-blue-700"
                  : "text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
              }`}
            >
              RuangChat
            </Link>
          </Navbar.Link>
        )}

        {isAuthenticated && user.role === "pasien" && (
          <Navbar.Link>
            <Link
              to="/spesialisasi"
              className={`font-bold ${
                location.pathname === "/konsultasi"
                  ? "text-blue-700"
                  : "text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
              }`}
            >
              Konsultasi
            </Link>
          </Navbar.Link>
        )}

        {isAuthenticated && user.role === "admin" && (
          <>
            <Navbar.Link>
              <Link
                to="/dokter"
                className={`font-bold ${
                  location.pathname === "/dokter"
                    ? "text-blue-700"
                    : "text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
                }`}
              >
                Dokter
              </Link>
            </Navbar.Link>
            <Navbar.Link>
              <Link
                to="/pasien"
                className={`font-bold ${
                  location.pathname === "/pasien"
                    ? "text-blue-700"
                    : "text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
                }`}
              >
                Pasien
              </Link>
            </Navbar.Link>
          </>
        )}

        <Navbar.Link>
          <Link
            to="/artikel"
            className={`font-bold ${
              location.pathname === "/artikel"
                ? "text-blue-700"
                : "text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
            }`}
          >
            Artikel
          </Link>
        </Navbar.Link>

        <Navbar.Link>
          <Link
            to="/kalkulator-bmi"
            className={`font-bold ${
              location.pathname === "/kalkulator-bmi"
                ? "text-blue-700"
                : "text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
            }`}
          >
            Kalkulator BMI
          </Link>
        </Navbar.Link>
        {isAuthenticated ? (
          <Navbar.Link className="flex items-center space-x-2">
            <img
              src={user.image}
              alt="Profile"
              className="h-8 w-8 rounded-full"
            />
            <span>{user.nama}</span>
            <Button className="bg-blue-700 hover:bg-blue-800 text-white md:text-sm xl:text-lg" onClick={handleLogout}>Logout </Button>
          </Navbar.Link>
        ) : (
          <Navbar.Link>
            <Link
              to="/login"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-700 dark:hover:bg-blue-800 dark:focus:ring-blue-800"
            >
              Login/Register
            </Link>
          </Navbar.Link>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
}

export default AppNavbar;
