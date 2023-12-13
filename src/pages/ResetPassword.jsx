import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

function ResetPassword() {
  const navigate = useNavigate();
  const [enterPassword, setEnterPassword] = useState("");
  const [reenterPassword, setReenterPassword] = useState("");
  const [error, setError] = useState("");

  const handleReset = async () => {
    // Validasi input
    if (!enterPassword || !reenterPassword) {
      setError("Semua field harus diisi");
      return;
    }

    // Validasi panjang password
    if (enterPassword.length < 6) {
      setError("Password harus lebih dari 6 karakter");
      return;
    }

    // Validasi password dan konfirmasi password
    if (enterPassword !== reenterPassword) {
      setError("Password dan Confirm Password harus sama");
      return;
    }

    try {
      // Kirim data perubahan password ke API
      const userId = Cookies.get('userId')

      const response = await axios.put(
        `https://65632a51ee04015769a6dd6e.mockapi.io/user/users/${userId}`,
        { password: enterPassword }
      )

      // Handle respons dari API sesuai kebutuhan
      console.log("Password berhasil diubah:", response.data);

      // Tambahkan logika navigasi atau tampilkan pesan sukses
      navigate("/reset-succesfully");
    } catch (error) {
      console.error("Error resetting password:", error);
      setError("Gagal mengubah password. Silakan coba lagi.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-white lg:bg-cyan-300">
      <div className="login lg:bg-white lg:h-[80vh] lg:w-[50vw] xl:h-[85vh] xl:w-[40vw] flex flex-col justify-center rounded-lg lg:shadow-lg">
        <div className="text-center text-violet-950 text-[30px] lg:text-[62px] font-extrabold mb-8">
          <h1 className="text-center text-violet-950 text-[28px] lg:text-[40px] xl:text-[50px] font-extrabold mb-4">Reset Password</h1>
          <p className="text-[14px] lg:text-[18px] font-normal">
            Please enter your new password to login
          </p>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <input
            className="w-[260px] h-[40px] lg:w-[408px] lg:h-[66px] rounded-[5px] border-[1px] border-stone-300 px-4 text-[12px] lg:text-base"
            type="password"
            placeholder="Enter Your New Password"
            value={enterPassword}
            onChange={(e) => {
              setEnterPassword(e.target.value);
              setError("");
            }}
          />
          <input
            className="w-[260px] h-[40px] lg:w-[408px] lg:h-[66px] rounded-[5px] border-[1px] border-stone-300 px-4 text-[12px] lg:text-base"
            type="password"
            placeholder="Re-enter Your New Password"
            value={reenterPassword}
            onChange={(e) => {
              setReenterPassword(e.target.value);
              setError("");
            }}
          />
          <button
            className="w-[260px] h-[40px] lg:w-[408px] lg:h-[66px] bg-violet-950 rounded-[5px] text-white text-[12px] lg:text-base"
            onClick={handleReset}
          >
            Confirm
          </button>
          {error && <p className="text-red-500 text-[12px] lg:text-[16px]">{error}</p>}
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
