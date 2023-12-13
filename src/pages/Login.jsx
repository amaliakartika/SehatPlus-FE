import React, { useState, useContext } from "react";
import loginImage from "../assets/Login-image.svg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

function Login() {
  const navigate = useNavigate();
  const { user, isAuthenticated, login, logout } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLoginClickPasien = async () => {
    // Validasi input
    if (!email || !password) {
      setError("Email dan password tidak boleh kosong");
      return;
    }

    try {
      const response = await axios.get(
        "https://65632a51ee04015769a6dd6e.mockapi.io/user/users"
      );
      const users = response.data;

      const user = users.find(
        (u) => u.email === email && u.password === password
      );

      if (user) {
        // Log user data to the console
        console.log("User Data:", user);

        // Redirect to home page
        navigate("/");

        // Setelah login, panggil fungsi login dari AuthContext
        login(user);
      } else {
        setError("Email atau password salah. Coba lagi.");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      setError("Terjadi kesalahan. Coba lagi.");
    }
  };

  const handleLoginClickDokter = async () => {
    // Validasi input
    if (!email || !password) {
      setError("Email dan password tidak boleh kosong");
      return;
    }

    try {
      const response = await axios.get(
        "https://65734dfd192318b7db41e6a4.mockapi.io/dokter"
      );
      const users = response.data;

      const user = users.find(
        (u) => u.email === email && u.password === password
      );

      if (user) {
        // Log user data to the console
        console.log("User Data:", user);

        // Redirect to dokter-dashboard page
        navigate("/dokter-dashboard");

        // Setelah login, panggil fungsi login dari AuthContext
        login(user);
        localStorage.setItem("userId", user.id);
        localStorage.setItem("userName", user.nama);
        console.log(localStorage);
      } else {
        setError("Email atau password salah. Coba lagi.");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      setError("Terjadi kesalahan. Coba lagi.");
    }
  };

  return (
    <div className="flex">
      <div className="login h-screen w-[100vw] lg:w-[50vw] flex flex-col justify-center">
        <div className="text-center text-violet-950 text-[30px] lg:text-[40px] xl:text-[62px] font-extrabold mb-4">
          Login
        </div>
        <div className="flex flex-col gap-4 lg:gap-6 xl:gap-8 items-center">
          <input
            className="w-[260px] h-[40px] lg:w-[408px] lg:h-[66px] rounded-[5px] border-[1px] border-stone-300 px-4 text-[12px] lg:text-[16px] xl:text-base"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError("");
            }}
          />
          <input
            className="w-[260px] h-[40px] lg:w-[408px] lg:h-[66px] rounded-[5px] border-[1px] border-stone-300 px-4 text-[12px] lg:text-[16px] xl:text-base"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError("");
            }}
          />
          <a
            href="forget-password"
            className="text-violet-950 text-[12px] lg:text-[16px] xl:text-base font-normal underline leading-tight"
          >
            Forgot Password?
          </a>
          <button
            className="w-[260px] h-[40px] lg:w-[408px] lg:h-[66px] bg-violet-950 rounded-[5px] text-[12px] lg:text-[16px] xl:text-base text-white"
            onClick={handleLoginClickPasien}
          >
            Login Sebagai Pasien
          </button>
          <button
            className="w-[260px] h-[40px] lg:w-[408px] lg:h-[66px] border-2 border-violet-950 rounded-[5px] text-[12px] lg:text-[16px] xl:text-base text-violet-950"
            onClick={handleLoginClickDokter}
          >
            Login Sebagai Dokter
          </button>
          {error && (
            <p className="text-red-500 text-[12px] lg:text-[16px]">{error}</p>
          )}
          <p className="text-[12px] lg:text-[16px] xl:text-base font-normal">
            Don't have account?{" "}
            <Link
              to="/register"
              className="text-violet-950 text-[12px] lg:text-[16px] xl:text-base font-normal underline leading-tight"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
      <div className="gambar flex items-center justify-center w-[50vw] h-screen bg-cyan-300 hidden lg:flex mx-auto">
        <img
          className="lg:w-[40vw] xl:w-[40vw] flex items-center justify-center bg-cyan-300 hidden lg:flex mx-auto"
          src={loginImage}
          alt=""
        />
      </div>
    </div>
  );
}

export default Login;
