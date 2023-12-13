import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

function ForgetPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const isEmailLinked = async (email) => {
    try {
      // Cek apakah email sudah terdaftar di API
      const response = await axios.get(
        `https://65632a51ee04015769a6dd6e.mockapi.io/user/users?email=${email}`
      );

      const userId = response.data[0].id;

      Cookies.set("userId", userId);

      console.log(userId);

      return response.data.length > 0;
    } catch (error) {
      console.error("Error checking email linkage:", error);

      // Selalu melempar pesan kesalahan email tidak terdaftar
      setError("Email tidak terdaftar. Silakan gunakan email yang terdaftar.");
    }
  };

  const handleContinue = async () => {
    // Validasi input
    if (!email) {
      setError("Email tidak boleh kosong");
      return;
    }

    // Validasi format email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Format email tidak valid");
      return;
    }

    try {
      // Cek apakah email sudah tertaut dengan API
      const isEmailLinkedResult = await isEmailLinked(email);

      console.log(isEmailLinkedResult);

      // Jika email terdaftar, lanjutkan ke langkah berikutnya
      if (!isEmailLinkedResult) {
        setError(
          "Email tidak terdaftar. Silahkan gunakan email yang terdaftar."
        );
        return;
      }

      navigate("/reset-password");
    } catch (error) {
      console.error("Error checking email linkage:", error);
      setError("Gagal memeriksa email. Silakan coba lagi.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-white lg:bg-cyan-300">
      <div className="login lg:bg-white lg:h-[80vh] lg:w-[50vw] xl:h-[85vh] xl:w-[40vw] flex flex-col justify-center rounded-lg lg:shadow-lg">
        <div className="text-center text-violet-950 text-[30px] lg:text-[62px] font-extrabold mb-8">
          <h1 className="text-center text-violet-950 text-[28px] lg:text-[40px] xl:text-[50px] font-extrabold mb-4">Forgot Password</h1>
          <p className="text-[14px] lg:text-[18px] font-normal">
            Masukkan email yang ditautkan ke akun anda
          </p>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <input
            className="w-[260px] h-[40px] lg:w-[408px] lg:h-[66px] rounded-[5px] border-[1px] border-stone-300 px-4 text-[12px] lg:text-base"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError("");
            }}
          />
          <button
            className="w-[260px] h-[40px] lg:w-[408px] lg:h-[66px] bg-violet-950 rounded-[5px] text-white text-[12px] lg:text-base"
            onClick={handleContinue}
          >
            Continue
          </button>
          {error && <p className="text-red-500 text-[12px] lg:text-[16px]">{error}</p>}
        </div>
      </div>
    </div>
  );
}

export default ForgetPassword;
